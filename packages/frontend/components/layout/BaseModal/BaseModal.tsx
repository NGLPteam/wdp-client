import { useCallback } from "react";
import { useIsMounted } from "@wdp/lib/hooks";
import { Dialog, DialogBackdrop } from "reakit/Dialog";
import styles from "./BaseModal.module.css";
import type { DialogProps } from "reakit/Dialog";

const Modal = ({
  dialog,
  header,
  children,
  footer,
  hideOnClickOutside = true,
  label,
}: Props) => {
  const isMounted = useIsMounted();

  const handleClose = useCallback(() => {
    if (dialog && dialog.hide) dialog.hide();
  }, [dialog]);

  return isMounted ? (
    <DialogBackdrop className={styles.backdrop} {...dialog}>
      <div className={styles.wrapper}>
        <Dialog
          className={styles.modal}
          hideOnClickOutside={hideOnClickOutside}
          aria-label={label}
          {...dialog}
        >
          {header && <header className={styles.header}>{header}</header>}
          <div className={styles.content}>
            {typeof children === "function"
              ? children({ handleClose })
              : children}
          </div>
          {footer && <footer className={styles.footer}>{footer}</footer>}
        </Dialog>
      </div>
    </DialogBackdrop>
  ) : null;
};

type RenderChildProps = {
  handleClose: () => void;
};

type RenderChild = (props: RenderChildProps) => React.JSX.Element;

interface Props {
  dialog: DialogProps;
  /** Modal label, displayed next to the close button */
  label?: string;
  /** Modal header */
  header?: React.ReactNode;
  /** Modal content */
  children?: RenderChild | React.ReactNode;
  /** Modal footer */
  footer?: React.ReactNode;
  /** If false, disables hiding on click outside the drawer */
  hideOnClickOutside?: boolean;
}

export default Modal;
