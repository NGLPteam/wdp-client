import Button from "@/components/atomic/Button";
import type { AssetKind } from "@/types/graphql-schema";
import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  kind?: AssetKind;
  name?: string;
  size?: string;
  slug?: string;
  url: string;
};

export default function AssetButton({ url, children }: Props) {
  return (
    <Button
      as="a"
      href={url}
      icon="download"
      download
      size="sm"
      className={styles.assetButton}
    >
      {children}
    </Button>
  );
}
