import styled from "styled-components";
import { aHidden } from "@wdp/lib/theme/mixins";
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

export const AccountButton = styled.div`
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

    &[data-condensed="true"] {
      ${aHidden}
    }
  `,
    "min",
  )}

  ${/* sc-selector */ AccountButton}:hover &,
  ${/* sc-selector */ AccountButton}[data-focus-visible-added] & {
    ${aLinkHoverFocus}
  }
`;
