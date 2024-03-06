import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useContributorQueryVars } from "hooks";
import { query } from "components/composed/contributor/ContributorList/ContributorList";
import { LoadingPage } from "components/atomic/loading";

import ContributorList from "components/composed/contributor/ContributorList";
import { ContributorListQuery as Query } from "@/relay/ContributorListQuery.graphql";

export default function ContributorListView() {
  const contributorSearchVars = useContributorQueryVars();

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={contributorSearchVars}
      subscribeIds={["Contributor"]}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) => queryRef && <ContributorList queryRef={queryRef} />}
    </QueryTransitionWrapper>
  );
}
