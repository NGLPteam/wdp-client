import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { ContributorListQuery as Query } from "@/relay/ContributorListQuery.graphql";
import { useContributorQueryVars } from "hooks";
import { query } from "components/composed/contributor/ContributorList/ContributorList";
import { LoadingPage } from "components/atomic/loading";

import ContributorList from "components/composed/contributor/ContributorList";

export default function ContributorListView() {
  const contributorSearchVars = useContributorQueryVars();

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ ...contributorSearchVars }}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) => queryRef && <ContributorList queryRef={queryRef} />}
    </QueryLoaderWrapper>
  );
}
