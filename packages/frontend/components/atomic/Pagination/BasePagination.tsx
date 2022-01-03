import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import * as Styled from "./Pagination.styles";
import PaginationButton from "./PaginationPrevNext";

export default function BasePagination({ page, pageCount }: Props) {
  const { t } = useTranslation();

  const { pathname, query, push } = useRouter();

  const { register, handleSubmit, reset } = useForm();

  // Reset the form when the page changes
  useEffect(() => {
    reset({ page });
  }, [reset, page]);

  // Push query changes
  const onSubmit = (data: Record<string, string>) => {
    push({ pathname, query: { ...query, page: data.page } });
  };

  // Set width using the maximum page number
  const width = pageCount ? `${pageCount.toString().length + 2}rem` : "3rem";

  // Set a default page number
  const currentPage = page || 1;

  // Do not render if there are no pages
  if (!pageCount) return null;

  return (
    <Styled.Nav aria-label="Pagination Navigation">
      {currentPage > 1 && (
        <PaginationButton direction="prev" page={currentPage} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.PageInput
          type="number"
          min={1}
          max={pageCount}
          defaultValue={currentPage}
          style={{ width }}
          {...register("page")}
        />
        <button type="submit" className="a-hidden">
          {t("common.submit")}
        </button>
      </form>
      <span>{t("common.of_count", { count: pageCount })}</span>
      {currentPage < pageCount && (
        <PaginationButton direction="next" page={currentPage} />
      )}
    </Styled.Nav>
  );
}

interface Props {
  page?: number | null;
  pageCount?: number | null;
}
