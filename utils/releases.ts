import {
  ListObjectsV2Command,
  ListObjectsV2Request,
  S3Client,
} from "@aws-sdk/client-s3";

// Release artifacts (the desktop-app zips) live in a private S3 bucket; the
// objects themselves are public but listing requires signed requests, so this
// runs server-side with AWS credentials from the environment.
const s3Client = new S3Client({
  region: "eu-central-1",
});

const bucket = "release-microgamma-io";

interface S3File {
  key: string;
  lastModified: string;
  size: number;
  url: string;
  filename: string;
}

// Lists the release zips in the bucket and returns only the latest one per
// `os/arch` platform (newest by lastModified).
export async function getReleases(): Promise<{ [k: string]: S3File }> {
  const objects = await listAllObjects(bucket);
  const files: S3File[] = objects
    .filter(({ Key }) => Key.endsWith("zip"))
    .map((obj) => {
      return {
        key: obj.Key,
        filename: obj.Key.split("/").pop() ?? obj.Key,
        lastModified: obj.LastModified,
        size: obj.Size,
        url: generatePublicUrl(bucket, obj.Key),
      };
    });

  const latest: { [k: string]: S3File } = {};

  for (const file of files) {
    const os = file.key.split("/")[1];
    const arch = file.key.split("/")[2];

    const k = `${os}/${arch}`;

    const current = latest[k];
    if (
      !current ||
      new Date(file.lastModified).getTime() >
        new Date(current.lastModified).getTime()
    ) {
      latest[k] = file;
    }
  }

  return latest;
}

async function listAllObjects(
  bucketName: string,
  prefix: string = "",
  continuationToken?: string,
): Promise<any[]> {
  const params: ListObjectsV2Request = {
    Bucket: bucketName,
    Prefix: prefix,
    ContinuationToken: continuationToken, // For handling pagination
  };

  const listAllObjectsCmd = new ListObjectsV2Command(params);
  const elements = [];

  try {
    const data = await s3Client.send(listAllObjectsCmd);

    if (Array.isArray(data.Contents)) {
      elements.push(...data.Contents);
    }

    // If there's more data, recursively fetch the next batch
    if (data.IsTruncated) {
      const nextBatch = await listAllObjects(
        bucketName,
        prefix,
        data.NextContinuationToken,
      );
      elements.push(...nextBatch);
    }
  } catch (err) {
    console.error("Error listing objects:", err);
    throw err;
  }

  return elements;
}

// Function to generate a public URL for an S3 object
function generatePublicUrl(
  bucketName: string,
  objectKey: string,
  region = "eu-central-1",
) {
  return `https://${bucketName}.s3.${region}.amazonaws.com/${objectKey}`;
}
