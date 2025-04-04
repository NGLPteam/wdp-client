import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";

function ContributorDetails({ queryRef }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? <ContributorUpdateForm data={contributor} /> : null;
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
  query detailsSlugContributorsPagesQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ...ContributorUpdateFormFragment
    }
  }
`;
