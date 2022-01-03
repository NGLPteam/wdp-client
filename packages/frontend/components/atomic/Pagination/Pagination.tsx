import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import BasePagination from "./BasePagination";
import { PaginationFragment$key } from "@/relay/PaginationFragment.graphql";

export default function Pagination({ data }: Props) {
  const pageData = useMaybeFragment(fragment, data);

  return pageData?.pageCount && pageData.pageCount > 1 ? (
    <BasePagination page={pageData.page} pageCount={pageData.pageCount} />
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
