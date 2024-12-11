"use client";

import classNames from "classnames";
import { CloseModalButton } from "components/atomic";
import { useIsMounted } from "@wdp/lib/hooks";
import { Dialog } from "reakit/Dialog";
import styles from "./BaseDrawer.module.css";
import type { DialogProps } from "reakit/Dialog";

export default function Drawer({
  header,
  children,
  footer,
  label,
  dialog,
}: Props) {
  const isMounted = useIsMounted();

  return isMounted ? (
    <Dialog
      className={classNames("a-bg-custom20", styles.wrapper)}
      aria-label={label}
      {...dialog}
    >
      <div className={styles.header}>
        <div>{header}</div>
        <CloseModalButton
          onClick={dialog.hide}
          aria-expanded={dialog.visible}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>{children}</div>
      </div>
      {footer && (
        <footer className={classNames("a-bg-custom10", styles.footer)}>
          {footer}
        </footer>
      )}
    </Dialog>
  ) : null;
}

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  dialog: DialogProps;
  label: string;
}
