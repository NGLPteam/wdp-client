import styled, { css } from "styled-components";
import { aButton } from "theme/mixins/appearance";
import { respond } from "theme/mixins/base";

export const MobileNav = styled.nav`
  display: none;

  ${respond(
    css`
      display: block;
    `,
    70
  )}
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 40px;
  border-radius: 4px;
  padding: 0 13px 0 16px;
  ${aButton()}
`;
