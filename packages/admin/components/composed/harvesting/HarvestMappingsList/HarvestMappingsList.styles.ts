import styled from "styled-components";
import { respond } from "theme/mixins/base";
import { aLink } from "theme/mixins/appearance";

export const Link = styled.span`
  ${aLink()}

  display: inline-flex;
  align-items: center;
  border-bottom: 1.5px solid transparent;

  &:hover {
    border-color: inherit;
    text-decoration: none;
  }

  ${respond(`margin-inline-start: 0;`, 70)}

  > svg {
    margin-inline-start: 4px;
  }
`;
