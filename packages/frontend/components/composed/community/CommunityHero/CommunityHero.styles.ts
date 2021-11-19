import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import { tHeading } from "theme/mixins/typography";

export const HeroInner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-xlg);
`;

export const Header = styled.h1`
  margin-block-end: ${pxToRem(80)};
`;

export const Form = styled.form``;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: ${pxToRem(64)};
  width: 100%;
`;

export const SearchIconLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(64)};
  border-bottom: 3px solid var(--color-base-neutral90);
`;

export const SearchInput = styled.input`
  ${aInputReset}
  ${tHeading(4)}
  flex: 1 1 auto;
  padding-block-start: ${pxToRem(17)};
  padding-block-end: ${pxToRem(20)};
  padding-inline: ${pxToRem(12)};
  border-bottom: 3px solid var(--color-base-neutral20);

  &::-webkit-search-cancel-button {
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    margin-block-start: ${pxToRem(2)};
  }
`;
