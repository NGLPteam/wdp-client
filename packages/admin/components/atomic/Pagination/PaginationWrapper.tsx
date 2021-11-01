import { useRouter } from "next/router";
import Link from "next/link";
import { PaginationInput as CICPaginationInput } from "@castiron/components-pagination";
import { ButtonControl } from "components/atomic/buttons";
import { Maybe } from "types/graphql-schema";

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

  const handleSubmit = (value: string) => {
    router.push({ pathname, query: { ...router.query, page: value } });
  };

  if (!currentPage || !totalPages) return null;

  return (
    <nav className={className} aria-label="Pagination Navigation">
      <Link
        href={{ pathname, query: { ...params, page: currentPage - 1 } }}
        passHref
      >
        <ButtonControl
          as="a"
          icon="arrow"
          iconRotate={270}
          aria-label="Previous Page"
          aria-disabled={currentPage <= 1}
        />
      </Link>
      <CICPaginationInput
        {...props}
        className={inputClassname}
        classes={inputClasses}
        inputId="paginationInput"
        onSubmitPage={handleSubmit}
      />
      <Link
        href={{ pathname, query: { ...params, page: currentPage + 1 } }}
        passHref
      >
        <ButtonControl
          as="a"
          icon="arrow"
          iconRotate={90}
          aria-label="Next Page"
          aria-disabled={currentPage >= totalPages}
        />
      </Link>
    </nav>
  );
};

interface Props {
  className?: string;
  currentPage?: Maybe<number> | number;
  totalPages?: Maybe<number> | number;
}

export default PaginationWrapper;
