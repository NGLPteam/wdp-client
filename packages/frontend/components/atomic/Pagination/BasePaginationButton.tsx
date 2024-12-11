import React, { useCallback } from "react";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Pagination.module.css";

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
    <button
      aria-label={direction === "prev" ? "Previous Page" : "Next Page"}
      {...props}
      onClick={handleSubmit}
      className={styles.prevNextButton}
    >
      <IconFactory icon={direction === "prev" ? "arrowLeft" : "arrowRight"} />
    </button>
  );
}

interface Props {
  direction: "prev" | "next";
  page: number;
  onSubmit: (data: Record<string, string | number>) => void;
}
