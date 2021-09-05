import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";

import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import ErrorPage from "next/error";

function ContributorDetails() {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();
  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, contributorSlug }}
    >
      {({ data }) => (
        <ContributorLayout data={data?.contributor}>
          <ContributorUpdateForm data={data?.contributor} />
        </ContributorLayout>
      )}
    </QueryWrapper>
  );
}

export default ContributorDetails;

const query = graphql`
  query detailsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      ...ContributorUpdateFormFragment
      ...ContributorLayoutFragment
    }
  }
`;
