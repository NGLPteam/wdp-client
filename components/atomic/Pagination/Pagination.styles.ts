import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import PaginationWrapper from "./PaginationWrapper";
type Props = React.ComponentProps<typeof PaginationWrapper>;

const Pagination = styled(PaginationWrapper)<Props>`
  --input-border-radius: ${pxToRem(6)};
  --input-text-align: center;
  --input-padding: 0 0 0 ${basePadding(1)};
  display: flex;
  align-items: center;
  margin-block-start: ${basePadding(6)};

  > * + *,
  &__total {
    margin-inline-start: ${basePadding(4)};
  }

  &__total {
    display: inline-block;
  }
`;

export default Pagination;
