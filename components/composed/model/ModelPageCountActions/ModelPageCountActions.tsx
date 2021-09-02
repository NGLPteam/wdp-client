import React from "react";
import { graphql, useFragment } from "react-relay";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import { PageCountActions } from "components/layout";

interface ModelPageCountActionsProps<
  T extends ModelPageCountActionsFragment$key
> {
  data?: T | null;
}

function ModelPageCountActions<T extends ModelPageCountActionsFragment$key>({
  data,
}: ModelPageCountActionsProps<T>) {
  const enhancedData = useFragment<ModelPageCountActionsFragment$key>(
    fragment,
    data || null
  );
  if (!enhancedData || !enhancedData.pageInfo) return null;
  return <PageCountActions pageInfo={enhancedData.pageInfo} />;
}

export default ModelPageCountActions;

const fragment = graphql`
  fragment ModelPageCountActionsFragment on Paginated {
    pageInfo {
      page
      pageCount
      perPage
      hasNextPage
      hasPreviousPage
      totalCount
      totalUnfilteredCount
    }
  }
`;
