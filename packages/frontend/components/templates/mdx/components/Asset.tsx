import DownloadLink from "@/components/atomic/links/Link/patterns/DownloadLink";
import type { AssetKind } from "@/types/graphql-schema";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  kind?: AssetKind;
  name?: string;
  size?: string;
  slug?: string;
  url: string;
};

export default function Asset({ url, children }: Props) {
  return <DownloadLink href={url}>{children}</DownloadLink>;
}
