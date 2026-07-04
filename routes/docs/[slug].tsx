import DocView from "../../components/DocView.tsx";

export default function DocsSlugPage(
  { params }: { params: { slug: string } },
) {
  return <DocView slug={params.slug} />;
}
