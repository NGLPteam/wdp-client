import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "../../../components/composed/community/CommunityLayout";
import { SlugCommunityQuery as Query } from "../../../__generated__/SlugCommunityQuery.graphql";

export default function CommunityPage() {
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data}>
          {data?.community && (
            <h1>{t("common.welcome_to", { name: data.community.title })}</h1>
          )}
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      title
    }
    ...CommunityLayoutFragment
  }
`;
