import styled from "styled-components";
import { fluidScale } from "theme/mixins";

export const Row = styled.div<{ $level?: number }>`
  --BrowseTreeItem-row-margin-left: ${fluidScale("50px", "25px")};

  position: relative;
  margin-inline-start: ${({ $level }) =>
    !$level || $level === 1
      ? "0"
      : $level === 2
      ? `var(--BrowseTreeItem-row-margin-left)`
      : `calc(var(--BrowseTreeItem-row-margin-left) * ${$level})`};
`;
