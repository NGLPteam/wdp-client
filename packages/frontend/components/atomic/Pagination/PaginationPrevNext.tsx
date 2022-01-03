import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./Pagination.styles";
import { IconFactory } from "components/factories";

export default function PaginationPrevNext({
  direction,
  page,
  ...props
}: Props) {
  const { pathname, query } = useRouter();

  return (
    <Link
      href={{
        pathname,
        query: { ...query, page: direction === "prev" ? page - 1 : page + 1 },
      }}
      passHref
    >
      <Styled.PrevNextLink
        aria-label={direction === "prev" ? "Previous Page" : "Next Page"}
        {...props}
      >
        <span></span>
        <IconFactory icon={direction === "prev" ? "arrowLeft" : "arrowRight"} />
      </Styled.PrevNextLink>
    </Link>
  );
}

interface Props {
  direction: "prev" | "next";
  page: number;
}
