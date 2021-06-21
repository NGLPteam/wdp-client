import React from "react";
import {
  SubcollectionList,
  SubitemList,
  Manage,
} from "components/views/entities";
import Link from "next/link";
import { TabNav } from "components/atomic";
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
            <TabNav.Tab active={view === "collections"}>
              Child Collections
            </TabNav.Tab>
          </Link>
          <Link href={`/collections/${id}/items`} passHref>
            <TabNav.Tab active={view === "items"}>Child Items</TabNav.Tab>
          </Link>
          <Link href={`/collections/${id}/manage`} passHref>
            <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "collections" && <SubcollectionList />}
      {view === "items" && <SubitemList />}
      {view === "manage" && <Manage />}
    </section>
  );
}
