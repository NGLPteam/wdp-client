import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { detailsContributorQuery as Query } from "__generated__/detailsContributorQuery.graphql";
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
        return <ContributorUpdateForm data={data.contributor} />;
      }}
    </QueryWrapper>
  );
};

ContributorDetails.getLayout = (page) => {
  return <ContributorLayout>{page}</ContributorLayout>;
};

export default ContributorDetails;

const query = graphql`
  query detailsContributorQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ...ContributorUpdateFormFragment
    }
  }
`;
