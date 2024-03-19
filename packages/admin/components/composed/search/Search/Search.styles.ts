import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";
import { aBgDark, aBgLight } from "theme/mixins/appearance";
import { encodedIconClose } from "components/svgs/icons/Close";
import { noInsetSupport } from "theme/mixins/base";
import { IconFactory } from "components/factories";
import { colors } from "theme/base/variables";

export const SearchWrapper = styled.div<{ $darkTheme?: boolean }>`
  --search-top-padding: ${pxToRem(7)};
  --search-left-padding: ${pxToRem(12)};

  position: relative;
  display: flex;
  align-items: stretch;
  background-color: var(--background-light);
  border-radius: var(--border-radius-xlg);
  transition: background-color var(--base-duration) var(--base-timing);
  color: var(--brand100);

  ${({ $darkTheme }) => $darkTheme && aBgDark("brand90")}

  &:focus-within,
  &:hover {
    ${aBgLight("brand10")}
  }
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  border: none;
  background-color: transparent;
  padding-block-start: var(--search-top-padding);
  padding-block-end: var(--search-top-padding);
  color: var(--color-dark);

  &::placeholder {
    color: var(--color-lighter);
    ${tLabel("md")}
  }

  &::-webkit-search-cancel-button {
    position: relative;
    cursor: pointer;
    inset-inline-end: 0;
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: url(${encodedIconClose({
        fill: colors.brand[90],
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
  margin-inline-start: var(--search-left-padding);
  margin-inline-end: var(--search-left-padding);
  align-self: center;
`;

export const FiltersButton = styled.button`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline-start: var(--search-left-padding);
  padding-inline-end: var(--search-left-padding);
  background-color: var(--brand20);
  border-top-right-radius: var(--border-radius-xlg);
  border-bottom-right-radius: var(--border-radius-xlg);
  transition:
    background-color var(--base-duration) var(--base-timing),
    color var(--base-duration) var(--base-timing);

  &:hover,
  &[data-focus-visible-added] {
    background-color: var(--brand30);
    color: var(--color-base);
  }
`;
