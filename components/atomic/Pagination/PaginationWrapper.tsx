import { PaginationInput as CICPaginationInput } from "@castiron/components-pagination";
import { MixedLink, ButtonControl } from "components/atomic";

const PaginationWrapper = ({
  className,
  onPrevPage,
  onNextPage,
  ...props
}: Props) => {
  const inputClassname = `${className}__input-wrapper`;
  const inputClasses = {
    input: `a-input`,
    label: "a-hidden",
    submit: `a-hidden`,
    total: `${className}__total`,
  };
  const { currentPage, totalPages } = props;

  return (
    <nav className={className} aria-label="Pagination Navigation">
      <MixedLink href={onPrevPage} passHref>
        <ButtonControl
          as="a"
          icon="arrow"
          iconRotate={270}
          aria-label="Previous Page"
          aria-disabled={currentPage <= 1}
        />
      </MixedLink>
      <CICPaginationInput
        {...props}
        className={inputClassname}
        classes={inputClasses}
        inputId="paginationInput"
      />
      <MixedLink href={onNextPage} passHref>
        <ButtonControl
          as="a"
          icon="arrow"
          iconRotate={90}
          aria-label="Next Page"
          aria-disabled={currentPage >= totalPages}
        />
      </MixedLink>
    </nav>
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
