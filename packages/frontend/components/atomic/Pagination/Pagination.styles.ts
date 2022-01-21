import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { aInputReset } from "@wdp/lib/theme/mixins";
import { aButtonBase, aFocus } from "theme/mixins";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-rg);
  }
`;

export const PrevNextButton = styled.button`
  ${aButtonBase("secondary")}
  padding: ${pxToRem(12)};
  border-radius: ${pxToRem(4)};
`;

export const PageInput = styled.input`
  ${aInputReset}

  border: 1px solid var(--color-base-neutral60);
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(8)};
  padding-inline-end: 1px;
  min-width: ${pxToRem(40)};

  ${aFocus()}
`;
