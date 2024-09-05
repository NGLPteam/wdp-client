import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import PaginationWrapper from "./PaginationWrapper";
type Props = React.ComponentProps<typeof PaginationWrapper>;

const Pagination = styled(PaginationWrapper)<Props>`
  --input-border-radius: ${pxToRem(6)};
  --input-text-align: center;
  --input-padding: 0 0 0 ${pxToRem(4)};
  --pagination-input-width: ${({ $totalPages }) =>
    $totalPages && pxToRem($totalPages.toString().length * 10 + 25)};
  display: flex;
  align-items: center;
  padding-block-start: ${pxToRem(24)};
  border-block-start: 1px solid var(--border-color);

  > * + *,
  &__total {
    margin-inline-start: ${pxToRem(16)};
  }

  &__total {
    display: inline-block;
  }
`;

export default Pagination;
