import styled from "styled-components";
import { Popover as BasePopover } from "reakit/Popover";

export const Popover = styled(BasePopover)`
  z-index: var(--z-index-dropdown);
`;
