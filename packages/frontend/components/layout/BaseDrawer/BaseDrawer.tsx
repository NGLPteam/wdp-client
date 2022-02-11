import React from "react";
import type { DialogProps } from "reakit/Dialog";
import * as Styled from "./BaseDrawer.styles";
import { CloseModalButton } from "components/atomic";

export default function Drawer({
  header,
  children,
  footer,
  label,
  dialog,
}: Props) {
  return (
    <Styled.Wrapper className="a-bg-custom20" aria-label={label} {...dialog}>
      <Styled.Header>
        <div>{header}</div>
        <CloseModalButton
          onClick={dialog.hide}
          aria-expanded={dialog.visible}
        />
      </Styled.Header>
      <Styled.Content>
        <Styled.Inner>{children}</Styled.Inner>
      </Styled.Content>
      {footer && (
        <Styled.Footer className="a-bg-custom10">{footer}</Styled.Footer>
      )}
    </Styled.Wrapper>
  );
}

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  dialog: DialogProps;
  label: string;
}
