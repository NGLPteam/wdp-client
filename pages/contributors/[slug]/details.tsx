import React from "react";
import { graphql } from "react-relay";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import ContributorLayoutQuery from "components/composed/contributor/ContributorLayoutQuery";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";

function ContributorDetails({ data }: Props) {
  return <ContributorUpdateForm data={data?.contributor} />;
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
      ...ContributorLayoutFragment
    }
  }
`;
