import React from "react";
import SubcollectionList from "components/views/entities/SubcollectionList";
import SubitemList from "components/views/entities/SubitemList";
import Link from "next/link";
import { TabNav, Tab } from "components/atomic";
import { PageHeader } from "components/layout";
import { useGlobalData } from "hooks/useGlobalData";

export default function CollectionDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  // TODO: Dynamic breadcrumbs
  const breadcrumbs = {
    data: [
      {
        label: "Collections",
        href: "/collections",
      },
      {
        label: `Collection: ${id}`,
        href: "#",
      },
    ],
  };

  return (
    <section>
      <PageHeader title={`Collection: ${id}`} breadcrumbsProps={breadcrumbs}>
        <TabNav>
          <Link href={`/collections/${id}/collections`} passHref>
            <Tab active={view === "collections"}>Child Collections</Tab>
          </Link>
          <Link href={`/collections/${id}/items`} passHref>
            <Tab active={view === "items"}>Child Items</Tab>
          </Link>
          <Link href={`/collections/${id}/manage`} passHref>
            <Tab active={view === "manage"}>Manage</Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "collections" && <SubcollectionList />}
      {view === "items" && <SubitemList />}
    </section>
  );
}
