import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";

function ContributorDetails({ queryRef, ...layoutProps }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ContributorLayout {...layoutProps} data={contributor}>
      <ContributorUpdateForm data={contributor} />
    </ContributorLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} {...props} />
);

ContributorDetails.getLayout = getLayout;

export default ContributorDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      ...ContributorUpdateFormFragment
      ...ContributorLayoutFragment
    }
  }
`;
