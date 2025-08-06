import Button from "@/components/atomic/Button";
import type { AssetKind } from "@/types/graphql-schema";
import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  kind?: AssetKind;
  name?: string;
  size?: string;
  slug?: string;
  href: string;
};

export default function OnlineVersionButton({ href }: Props) {
  return (
    <Button
      as="a"
      href={href}
      icon="linkExternal"
      size="sm"
      className={styles.onlineVersionButton}
    >
      Online Version
    </Button>
  );
}
