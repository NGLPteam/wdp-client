import React, { useCallback } from "react";
import IconFactory from "@/components/factories/IconFactory";
import * as Styled from "./Pagination.styles";

export default function PaginationPrevNext({
  direction,
  page,
  onSubmit,
  ...props
}: Props) {
  const handleSubmit = useCallback(() => {
    if (direction === "prev" && page > 1) {
      onSubmit({ page: page - 1 });
    } else {
      onSubmit({ page: page + 1 });
    }
  }, [onSubmit, page, direction]);

  return (
    <Styled.PrevNextButton
      aria-label={direction === "prev" ? "Previous Page" : "Next Page"}
      {...props}
      onClick={handleSubmit}
    >
      <IconFactory icon={direction === "prev" ? "arrowLeft" : "arrowRight"} />
    </Styled.PrevNextButton>
  );
}

interface Props {
  direction: "prev" | "next";
  page: number;
  onSubmit: (data: Record<string, string | number>) => void;
}
