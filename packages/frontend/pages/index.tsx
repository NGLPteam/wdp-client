import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { pagesQuery as Query } from "../__generated__/pagesQuery.graphql";
import BaseLayout from "../components/composed/base/BaseLayout";

export default function CommunitiesPage() {
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <BaseLayout data={data}>
          <h1>{t("common.welcome_to", { name: "this instance" })}</h1>
        </BaseLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query pagesQuery {
    ...BaseLayoutFragment
  }
`;
