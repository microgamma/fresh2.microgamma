import DocView from "../../components/DocView.tsx";
import { docsNav } from "../../utils/docs.ts";

export default function DocsIndexPage() {
  return <DocView slug={docsNav[0].slug} />;
}
