import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import * as Styled from "./BaseModal.styles";

const Modal = ({
  dialog,
  header,
  children,
  footer,
  hideOnClickOutside = true,
}: Props) => {
  const handleClose = () => {
    if (dialog && dialog.hide) dialog.hide();
  };

  return (
    <Styled.Backdrop {...dialog}>
      <Styled.Wrapper>
        <Styled.Modal hideOnClickOutside={hideOnClickOutside} {...dialog}>
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
  );
};

type RenderChildProps = {
  handleClose: () => void;
};

type RenderChild = (props: RenderChildProps) => JSX.Element;

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
