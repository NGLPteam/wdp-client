import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { transition } from "theme/base/variables";
import { aFocusReset } from "theme/mixins";
import BaseLink from "next/link";

export type LinkProps = Omit<
  React.ComponentProps<typeof BaseLink>,
  "href" | "as"
> & {
  href?: string | null;
};

export const Link = styled(BaseLink)<LinkProps>`
  position: relative;
  display: inline-flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }

  > span {
    border-bottom: 2px solid transparent;
    padding-block-start: ${pxToRem(2)};
    padding-block-end: ${pxToRem(2)};
    transition: ${transition.border};
  }

  &:hover,
  &[aria-expanded="true"] {
    color: var(--color-light);

    > span {
      border-bottom-color: var(--color-lighter);
    }
  }

  ${aFocusReset}

  button:focus-visible &,
  a:focus-visible &,
  &:focus-visible,
  &[aria-current] {
    color: var(--color-base);

    > span {
      border-bottom-color: var(--color-base);
    }
  }
`;
