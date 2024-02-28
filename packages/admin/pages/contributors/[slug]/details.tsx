import { graphql } from "relay-runtime";

import ContributorLayoutQuery from "components/composed/contributor/ContributorLayoutQuery";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { LoadingCircle } from "components/atomic";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorDetails({ data }: Props) {
  return data && data.contributor ? (
    <ContributorUpdateForm data={data.contributor} />
  ) : (
    <LoadingCircle className="l-page-loading" />
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
