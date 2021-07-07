import { PaginationInput as CICPaginationInput } from "@castiron/components-pagination";
import { ButtonControl } from "components/atomic/buttons";
import { MixedLink } from "components/atomic";
import { useRouter } from "next/router";

const PaginationWrapper = ({ className, ...props }: Props) => {
  const inputClassname = `${className}__input-wrapper`;
  const inputClasses = {
    input: `a-input`,
    label: "a-hidden",
    submit: `a-hidden`,
    total: `${className}__total`,
  };
  const { currentPage, totalPages } = props;

  // Get current path and query without using next router
  const pathname = window.location.pathname;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const router = useRouter();

  const handleSubmit = (value) => {
    router.push({ pathname, query: { ...params, page: value } });
  };

  return (
    <nav className={className} aria-label="Pagination Navigation">
      <MixedLink
        href={pathname}
        params={{ ...params, page: currentPage - 1 }}
        passHref
      >
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
        onSubmitPage={handleSubmit}
      />
      <MixedLink
        href={pathname}
        params={{ ...params, page: currentPage + 1 }}
        passHref
      >
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
}

export default PaginationWrapper;
