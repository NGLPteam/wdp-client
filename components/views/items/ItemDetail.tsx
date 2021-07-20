import React, { useEffect, useState } from "react";
import { graphql } from "react-relay";
import {
  ItemDetailQuery,
  ItemDetailQueryVariables,
} from "__generated__/ItemDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import ItemChildItems from "./ItemChildItems";
import { Manage } from "components/views/entities";
import { ModelHeader } from "components/composed/model";
import { useBreadcrumbs, useRouterContext } from "hooks";
import { useRouter } from "next/router";

export default function ItemDetail() {
  const { activeId: id, activeView: view } = useRouterContext();

  // This redirect is a temporary workaround to deal with immature routing. For demo
  // purposes, we want to show the correct landing page, but the current approach locks us
  // into an inflexible structure. Remove this when routing is revised.
  const router = useRouter();
  useEffect(() => {
    if (view === "main" && id) {
      const redirect = `/items/${id}/items`;
      router.push(redirect);
    }
  }, [view, id, router]);

  const [variables, setVariables] = useState<ItemDetailQueryVariables>({
    slug: id || "Kr6Na0VT4d41FYJvT8LDGIKb5zgBzBb",
  });

  const { data, error, isLoading } = useAuthenticatedQuery<ItemDetailQuery>(
    query,
    variables
  );

  const breadcrumbs = useBreadcrumbs(data?.item);

  useEffect(() => {
    setVariables((v) => ({ ...v, slug: id }));
  }, [id, setVariables]);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  const { item } = data;

  return (
    <section>
      {item && (
        <ModelHeader
          id={id}
          model="item"
          title={item.title}
          breadcrumbs={breadcrumbs}
        />
      )}
      {view === "items" && <ItemChildItems item={item} />}
      {view === "manage" && <Manage />}
    </section>
  );
}

const query = graphql`
  query ItemDetailQuery($slug: Slug!) {
    item(slug: $slug) {
      title
      slug
      summary
      publishedOn
      hierarchicalDepth
      ...useBreadcrumbsFragment
    }
  }
`;
