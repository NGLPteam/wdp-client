import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";
import { useRouteSlug } from "hooks/useRouteSlug";

const ContributorDetails: Page = () => {
  const slug = useRouteSlug();

  // TODO: 404 here.
  if (!slug) {
    return null;
  }

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => {
        if (!data || !data.contributor) return null;
        return (
          <ContributorLayout data={data.contributor}>
            <ContributorUpdateForm data={data.contributor} />
          </ContributorLayout>
        );
      }}
    </QueryWrapper>
  );
};

export default ContributorDetails;

const query = graphql`
  query detailsSlugContributorsPagesQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ...ContributorUpdateFormFragment
      ...ContributorLayoutFragment
    }
  }
`;
