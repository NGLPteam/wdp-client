import React from "react";
import Link from "next/link";
import { SubitemList, Manage } from "components/views/entities";
import { useGlobalData } from "hooks/useGlobalData";
import { TabNav } from "components/atomic";
import { PageHeader } from "components/layout";

export default function ItemDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  // TODO: Dynamic breadcrumbs
  const breadcrumbs = {
    data: [
      {
        label: "Items",
        href: "/items",
      },
      {
        label: `Item: ${id}`,
        href: "#",
      },
    ],
  };

  return (
    <section>
      <PageHeader title={`Item: ${id}`} breadcrumbsProps={breadcrumbs}>
        <TabNav>
          <Link href={`/items/${id}/items`} passHref>
            <TabNav.Tab active={view === "items"}>Child Items</TabNav.Tab>
          </Link>
          <Link href={`/items/${id}/manage`} passHref>
            <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "items" && <SubitemList />}
      {view === "manage" && <Manage />}
    </section>
  );
}
