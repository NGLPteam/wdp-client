import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import { metricsSlugItemQuery as Query } from "@/relay/metricsSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemPage() {
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <ItemLayoutQuery data={data}>
          <EntityLayoutFactory data={data?.item}>
            <div className="l-container-wide l-container-wide--p-lg">
              <h3>{t("layouts.metrics_header")}</h3>
            </div>
          </EntityLayoutFactory>
        </ItemLayoutQuery>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query metricsSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
