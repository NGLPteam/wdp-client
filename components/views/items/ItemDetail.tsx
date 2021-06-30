import React, { useEffect, useState, useMemo } from "react";
import { graphql } from "react-relay";
import {
  ItemDetailQuery,
  ItemDetailQueryVariables,
} from "__generated__/ItemDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import { SubitemList, Manage } from "components/views/entities";
import { TabNav } from "components/atomic";
import { PageHeader } from "components/layout";
import transformBreadcrumbList from "helpers/transforms/breadcrumbs";

export default function ItemDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  const [variables, setVariables] = useState<ItemDetailQueryVariables>({
    slug: id || "Kr6Na0VT4d41FYJvT8LDGIKb5zgBzBb",
  });

  const { data, error, isLoading } = useAuthenticatedQuery<ItemDetailQuery>(
    query,
    variables
  );

  useEffect(() => {
    setVariables((v) => ({ ...v, slug: id }));
  }, [id, setVariables]);

  const breadcrumbsData = useMemo(() => {
    if (!data || !data.item) return [];

    return transformBreadcrumbList(data.item.breadcrumbs, data.item.title);
  }, [data]);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <PageHeader
        title={data.item.title}
        breadcrumbsProps={{ data: breadcrumbsData }}
      >
        <TabNav>
          <Link href={`/items/${id}/items`} passHref>
            <TabNav.Tab active={view === "items"}>Child Items</TabNav.Tab>
          </Link>
          <Link href={`/items/${id}/manage`} passHref>
            <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>
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
      breadcrumbs {
        depth
        label
        kind
        slug
      }
    }
  }
`;
