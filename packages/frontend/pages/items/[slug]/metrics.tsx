import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import { metricsSlugItemQuery as Query } from "@/relay/metricsSlugItemQuery.graphql";
import ItemLayout from "components/composed/items/ItemLayout";

export default function ItemPage() {
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <ItemLayout data={data}>
          <div className="l-container-wide l-container-wide--p-lg">
            <h3>{t("layouts.metrics_header")}</h3>
          </div>
        </ItemLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query metricsSlugItemQuery($slug: Slug!) {
    ...ItemLayoutFragment @arguments(slug: $slug)
  }
`;
