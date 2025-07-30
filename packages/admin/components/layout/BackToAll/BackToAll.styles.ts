import styled from "styled-components";
import { respond, fluidScale } from "theme/mixins/base";

export const NavWrapper = styled.nav`
  padding-block-start: 24px;
  display: flex;
  align-items: center;
  ${respond(`flex-wrap: wrap;`, "navBreak")}
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  white-space: nowrap;

  > * + * {
    margin-inline-start: 5px;
  }

  & + & {
    margin-inline-start: 5px;
  }
`;

export const Label = styled.span<{ $nested: boolean }>`
  --Label-width-offset: ${fluidScale("60px", "20px", "1280px", "1024px")};

  ${({ $nested }) =>
    $nested &&
    `max-width: calc(var(--container-max) / 2 - var(--Label-width-offset));`}
  overflow: hidden;
  text-overflow: ellipsis;

  ${respond(`max-width: 85vw;`, "navBreak")}
`;
