import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import Alert from "./Alert";

type AlertProps = React.ComponentProps<typeof Alert>;

export const Wrapper = styled.div<
  Pick<AlertProps, "color"> & { $badge?: boolean }
>`
  ${({ color }) =>
    `
    --alert-bg-color: var(--color-base-${color}Tint);
    --alert-text-color: var(--color-base-${color}Alert);
  `}

  color: var(--alert-text-color);
  background-color: var(--alert-bg-color);
  padding-block: ${({ $badge }) =>
    $badge ? `var(--padding-xs)` : pxToRem(12)};
  padding-inline: ${({ $badge }) =>
    $badge ? pxToRem(14) : `var(--padding-rg)`};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(12)};
  border: 1px solid;
  border-radius: var(--border-radius-xs);
  width: max-content;
`;
