import styled from "styled-components";
import { IconFactory } from "components/factories";
import {
  aLinkBase,
  aLinkHoverFocus,
  tLabel,
  tCopySmall,
  globalNavRespond,
} from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountButton = styled.button`
  display: flex;
  align-items: center;
`;

export const Icon = styled(IconFactory)`
  margin-inline-start: var(--padding-sm);
`;

export const Name = styled.span`
  margin-inline-start: var(--padding-sm);
  ${aLinkBase}
  ${tCopySmall}

  ${globalNavRespond(
    `
    ${tLabel("mix")}
    order: -1;
    margin-inline-end: var(--padding-sm);
  `,
    "min"
  )}

  ${AccountButton}:hover & {
    ${aLinkHoverFocus}
  }
`;
