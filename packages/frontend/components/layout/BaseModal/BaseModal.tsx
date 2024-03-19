import React, { useCallback } from "react";
import { useIsMounted } from "@wdp/lib/hooks";
import * as Styled from "./BaseModal.styles";
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
    <Styled.Backdrop {...dialog}>
      <Styled.Wrapper>
        <Styled.Modal
          hideOnClickOutside={hideOnClickOutside}
          aria-label={label}
          {...dialog}
        >
          {header && <Styled.Header>{header}</Styled.Header>}
          <Styled.Content>
            {typeof children === "function"
              ? children({ handleClose })
              : children}
          </Styled.Content>
          {footer && <Styled.Footer>{footer}</Styled.Footer>}
        </Styled.Modal>
      </Styled.Wrapper>
    </Styled.Backdrop>
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
