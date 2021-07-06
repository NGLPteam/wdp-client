import Link from "next/link";
import { PaginationInput as CICPaginationInput } from "@castiron/components-pagination";
import { ButtonControl } from "components/atomic/buttons";
import { normalizePathData } from "helpers/routes";
import { useRouter } from "next/router";
import { UrlObject } from "url";

const PaginationWrapper = ({ className, ...props }: Props) => {
  const inputClassname = `${className}__input-wrapper`;
  const inputClasses = {
    input: `a-input`,
    label: "a-hidden",
    submit: `a-hidden`,
    total: `${className}__total`,
  };
  const { currentPage, totalPages } = props;
  const router = useRouter();
  const { pathname, pathParams } = normalizePathData(router.asPath);

  const makeLinkObject = (page: number): UrlObject => ({
    pathname: pathname || "",
    query: { ...pathParams, page: page },
  });

  const handleSubmit = (value) => {
    router.push(makeLinkObject(value));
  };

  return (
    <nav className={className} aria-label="Pagination Navigation">
      <Link href={makeLinkObject(currentPage - 1)} passHref>
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
      <Link href={makeLinkObject(currentPage + 1)} passHref>
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
  currentPage: number;
  totalPages: number;
}

export default PaginationWrapper;
