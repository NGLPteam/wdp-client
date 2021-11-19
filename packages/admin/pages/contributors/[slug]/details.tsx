import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";

import ContributorLayoutQuery from "components/composed/contributor/ContributorLayoutQuery";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { LoadingCircle } from "components/atomic";

function ContributorDetails({ data }: Props) {
  return data && data.contributor ? (
    <ContributorUpdateForm data={data.contributor} />
  ) : (
    <LoadingCircle />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ContributorLayoutQuery<Query, Props> query={query} {...props} />;
};
ContributorDetails.getLayout = getLayout;

export default ContributorDetails;

type Props = {
  data: Query["response"];
};
const query = graphql`
  query detailsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      ...ContributorUpdateFormFragment
      ...ContributorLayoutQueryFragment
    }
  }
`;
