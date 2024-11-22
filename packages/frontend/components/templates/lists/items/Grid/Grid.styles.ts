import styled from "styled-components";
import { aLinkHoverFocus } from "theme/mixins";
import NamedLink from "@/components/atomic/links/NamedLink";

export const TextContent = styled.div`
  margin-block-start: 1rem;
  font-size: var(--font-size-base-sm);
`;

export const ContextOne = styled.span`
  color: var(--color-base-neutral70);
`;

export const Header = styled.h4`
  margin-block-start: 0.5rem;
`;

export const Subheader = styled.span`
  display: block;
  color: var(--color-base-neutral70);
  font-size: var(--font-size-base);
  margin-block-start: 0.5rem;
`;

export const Link = styled(NamedLink)`
  &:hover,
  &:focus-visible {
    ${Header} > span,
    ${Subheader} > span {
      ${aLinkHoverFocus}
    }
  }
`;

export const Contributors = styled.span`
  display: block;
  margin-block-start: 0.25rem;
`;

export const Group = styled.div`
  margin-block-start: 1rem;
  color: var(--color-base-neutral70);

  > span {
    display: block;
  }

  > * + * {
    margin-block-start: 0.25rem;
  }
`;
