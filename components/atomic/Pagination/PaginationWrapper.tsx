import {
  Pagination as CICPagination,
  PaginationInput as CICPaginationInput,
} from "@castiron/components-pagination";
import { ButtonControl } from "components/atomic";

const PaginationWrapper = ({ className, ...props }: Props) => {
  const inputClassname = `${className}__input-wrapper`;
  const baseClasses = {};
  const inputClasses = {
    input: `a-input`,
    label: "a-hidden",
    submit: `a-hidden`,
    total: `${className}__total`,
  };

  return (
    <CICPagination
      {...props}
      className={className}
      classes={baseClasses}
      prevLabel="Previous Page"
      nextLabel="Next Page"
      prev={<ButtonControl as="span" icon="arrow" iconRotate={270} />}
      next={<ButtonControl as="span" icon="arrow" iconRotate={90} />}
    >
      <CICPaginationInput
        {...props}
        className={inputClassname}
        classes={inputClasses}
        inputId="paginationInput"
      />
    </CICPagination>
  );
};

interface Props {
  className?: string;
  currentPage: number;
  totalPages: number;
  onNextPage: string;
  onPrevPage: string;
  onSubmitPage: (value: string) => void;
}

export default PaginationWrapper;
