"use client";

import { CloseModalButton } from "components/atomic";
import { useIsMounted } from "@wdp/lib/hooks";
import * as Styled from "./BaseDrawer.styles";
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
  ) : null;
}

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  dialog: DialogProps;
  label: string;
}
