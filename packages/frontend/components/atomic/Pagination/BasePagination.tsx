import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import BasePaginationButton from "./BasePaginationButton";
import * as Styled from "./Pagination.styles";

export default function BasePagination({ page, pageCount, onSubmit }: Props) {
  const { t } = useTranslation();

  const { register, handleSubmit, reset } = useForm();

  // Reset the form when the page changes
  useEffect(() => {
    reset({ page });
  }, [reset, page]);

  // Set width using the maximum page number
  const width = pageCount ? `${pageCount.toString().length + 2}rem` : "3rem";

  // Set a default page number
  const currentPage = page || 1;

  // Do not render if there are no pages
  if (!pageCount) return null;

  return (
    <Styled.Nav aria-label="Pagination Navigation">
      {currentPage > 1 && (
        <BasePaginationButton
          direction="prev"
          page={currentPage}
          onSubmit={onSubmit}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.PageInput
          type="number"
          min={1}
          max={pageCount}
          defaultValue={currentPage}
          style={{ width }}
          aria-label="Page"
          {...register("page")}
        />
        <button type="submit" className="a-hidden">
          {t("common.submit")}
        </button>
      </form>
      <span>{t("list.of_count", { count: pageCount })}</span>
      {currentPage < pageCount && (
        <BasePaginationButton
          direction="next"
          page={currentPage}
          onSubmit={onSubmit}
        />
      )}
    </Styled.Nav>
  );
}

interface Props {
  page?: number | null;
  pageCount?: number | null;
  onSubmit: (data: Record<string, string | number>) => void;
}
