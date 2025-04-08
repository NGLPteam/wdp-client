import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";
import { aBgLight, aGlow } from "theme/mixins/appearance";
import { encodedIconClose } from "components/svgs/icons/Close";
import { noInsetSupport } from "theme/mixins/base";
import { IconFactory } from "components/factories";
import { colors } from "theme/base/variables";

export const SearchWrapper = styled.div`
  --search-block-padding: ${pxToRem(16)};
  --search-inline-padding: ${pxToRem(12)};
  --search-icon-color: var(--brand90);

  position: relative;
  display: flex;
  align-items: stretch;
  background-color: var(--background-light);
  border-radius: var(--border-radius-xlg);
  border: 1px solid transparent;
  transition:
    background-color var(--base-duration) var(--base-timing),
    color var(--base-duration) var(--base-timing);
  color: var(--brand100);
  margin-inline: 0.5rem;

  &:focus-within,
  &:hover {
    ${aBgLight("brand10")}
  }
`;

export const SearchDisclosure = styled(SearchWrapper)`
  --search-inline-padding: ${pxToRem(8)};
  --search-icon-color: var(--color-dark);

  padding-block: var(--search-inline-padding);
  color: var(--neutral-white);
  cursor: pointer;
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  border: none;
  background-color: transparent;
  padding-block-start: var(--search-block-padding);
  padding-block-end: var(--search-block-padding);
  color: var(--color-dark);

  &::placeholder {
    color: var(--color-lighter);
    ${tLabel("md")}
  }

  &::-webkit-search-cancel-button {
    position: relative;
    cursor: pointer;
    inset-inline-end: 20px;
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 10px;
    background: url(${encodedIconClose({
        fill: colors.neutral[90],
      })})
      center no-repeat;

    ${noInsetSupport(`
    right: 0;
  `)}
  }

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(IconFactory)`
  flex: 0 0 auto;
  margin-inline-start: var(--search-inline-padding);
  margin-inline-end: var(--search-inline-padding);
  align-self: center;
  color: var(--search-icon-color);
  transition: color var(--base-duration) var(--base-timing);
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--brand20);
  border-top-right-radius: var(--border-radius-xlg);
  border-bottom-right-radius: var(--border-radius-xlg);

  &:hover,
  &:focus-visible {
    background-color: var(--brand30);
    color: var(--color-base);
  }
`;

export const SubmitIcon = styled(IconFactory)`
  flex: 0 0 auto;
  margin-inline-start: ${pxToRem(18)};
  margin-inline-end: ${pxToRem(18)};
  align-self: center;
  transform: rotate(90deg);
  color: var(--neutral90);
`;

export const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--neutral90);
`;

export const ClearIcon = styled(IconFactory)`
  &:hover,
  &:focus-visible {
    ${aGlow("lightMode")}
  }
`;
