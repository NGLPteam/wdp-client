import React, { useEffect, useState } from "react";
import { graphql } from "react-relay";
import {
  ItemDetailQuery,
  ItemDetailQueryVariables,
} from "__generated__/ItemDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { SubitemList, Manage } from "components/views/entities";
import { EntityHeader } from "components/composed/entity";
import { useBreadcrumbs, useGlobalData } from "hooks";

export default function ItemDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
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

  return (
    <section>
      {data && data.item && (
        <EntityHeader
          id={id}
          type="ITEM"
          view={view}
          title={data.item.title}
          breadcrumbs={breadcrumbs}
        />
      )}
      {view === "items" && <SubitemList />}
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
