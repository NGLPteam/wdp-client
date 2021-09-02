import React from "react";
import { Pagination } from "components/atomic";
import { graphql, useFragment } from "react-relay";
import { ModelPaginationFragment$key } from "@/relay/ModelPaginationFragment.graphql";

interface ModelPaginationProps<T extends ModelPaginationFragment$key> {
  data?: T | null;
}

function ModelPagination<T extends ModelPaginationFragment$key>({
  data,
}: ModelPaginationProps<T>) {
  const enhancedData = useFragment<ModelPaginationFragment$key>(
    fragment,
    data || null
  );
  if (!enhancedData || !enhancedData.pageInfo) return null;

  return (
    <Pagination
      currentPage={enhancedData.pageInfo.page}
      totalPages={enhancedData.pageInfo.pageCount}
    />
  );
}

export default ModelPagination;

const fragment = graphql`
  fragment ModelPaginationFragment on Paginated {
    pageInfo {
      page
      pageCount
    }
  }
`;
