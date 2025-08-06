import Button from "@/components/atomic/Button";
import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href?: string | null;
};

export default function ButtonLink({ href, children }: Props) {
  return href ? (
    <Button
      as="a"
      href={href}
      icon="linkExternal"
      size="sm"
      className={styles.buttonLink}
    >
      {children}
    </Button>
  ) : null;
}
