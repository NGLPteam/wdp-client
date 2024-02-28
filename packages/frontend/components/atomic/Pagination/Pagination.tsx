import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouter } from "next/router";
import { PaginationFragment$key } from "@/relay/PaginationFragment.graphql";
import BasePagination from "./BasePagination";

export default function Pagination({ data }: Props) {
  const pageData = useMaybeFragment(fragment, data);

  const { pathname, query, push } = useRouter();

  // Push query changes
  const onSubmit = (data: Record<string, string | number>) => {
    push({ pathname, query: { ...query, page: data.page } });
  };

  return pageData?.pageCount && pageData.pageCount > 1 ? (
    <BasePagination
      page={pageData.page}
      pageCount={pageData.pageCount}
      onSubmit={onSubmit}
    />
  ) : null;
}

interface Props {
  data?: PaginationFragment$key | null;
}

const fragment = graphql`
  fragment PaginationFragment on PageInfo {
    page
    pageCount
  }
`;
