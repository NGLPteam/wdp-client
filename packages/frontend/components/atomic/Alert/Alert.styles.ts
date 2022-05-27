import styled from "styled-components";
import Alert from "./Alert";
import { pxToRem } from "@wdp/lib/theme/functions";

type AlertProps = React.ComponentProps<typeof Alert>;

export const Wrapper = styled.div<Pick<AlertProps, "color">>`
  ${({ color }) =>
    `
    --alert-bg-color: var(--color-base-${color}Tint);
    --alert-text-color: var(--color-base-${color}AA);
  `}

  color: var(--alert-text-color);
  background-color: var(--alert-background-color);
  padding-block: ${pxToRem(12)};
  padding-inline: var(--padding-rg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(12)};
  border: 1px solid;
  border-radius: var(--border-radius-xs);
  min-width: 400px;
`;
