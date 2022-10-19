import { graphql } from "react-relay";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import { PageCountActions } from "components/layout";
import { useMaybeFragment, useQueryStateContext } from "hooks";

interface ModelPageCountActionsProps<
  T extends ModelPageCountActionsFragment$key
> {
  data?: T | null;
}

function ModelPageCountActions<T extends ModelPageCountActionsFragment$key>({
  data,
}: ModelPageCountActionsProps<T>) {
  const { loading } = useQueryStateContext();

  const enhancedData = useMaybeFragment<ModelPageCountActionsFragment$key>(
    fragment,
    data
  );

  return (
    <PageCountActions loading={loading} pageInfo={enhancedData?.pageInfo} />
  );
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
      # This vaulue is currently not used
      # totalUnfilteredCount
    }
  }
`;
