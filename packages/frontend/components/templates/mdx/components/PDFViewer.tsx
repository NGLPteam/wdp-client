import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const AssetInlinePDF = dynamic(
  () => import("components/composed/asset/AssetInlinePDF"),
  { ssr: false },
);

type Props = PropsWithChildren & {
  name?: string | null;
  size?: string | null;
  slug?: string | null;
  url?: string | null;
};

export default function PDFViewer({ url, size }: Props) {
  return <AssetInlinePDF url={url} size={size} />;
}
