import React from "react";
import { graphql } from "react-relay";
import { ItemLayoutQuery } from "__generated__/ItemLayoutQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { ModelHeader } from "components/composed/model";
import { useRouter } from "next/router";
import { useBreadcrumbs } from "hooks";
import { routeQueryArrayToString } from "routes";

export default function ItemLayout({ children }) {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useAuthenticatedQuery<ItemLayoutQuery>(
    query,
    { slug: routeQueryArrayToString(slug) }
  );

  const breadcrumbs = useBreadcrumbs(data?.item);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      {data && data.item && (
        <ModelHeader
          type="ITEM"
          title={data.item.title}
          breadcrumbs={breadcrumbs}
        />
      )}

      {children}
    </section>
  );
}

const query = graphql`
  query ItemLayoutQuery($slug: Slug!) {
    item(slug: $slug) {
      title
      slug
      ...useBreadcrumbsFragment
    }
  }
`;
