import React from "react";
import { graphql, useFragment } from "react-relay";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import { PageCountActions } from "components/layout";

interface ModelPageCountActionsProps<
  T extends ModelPageCountActionsFragment$key
> {
  data: T;
}

function ModelPageCountWithData<T extends ModelPageCountActionsFragment$key>({
  data,
}: ModelPageCountActionsProps<T>) {
  const { pageInfo } = useFragment<ModelPageCountActionsFragment$key>(
    fragment,
    data
  );

  return <PageCountActions pageInfo={pageInfo} />;
}

function ModelPageCountActions<T extends ModelPageCountActionsFragment$key>({
  data,
}: ModelPageCountActionsProps<T>) {
  return data ? <ModelPageCountWithData data={data} /> : <PageCountActions />;
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
