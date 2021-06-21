import React from "react";
import { SubcollectionList, Manage } from "components/views/entities";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import { TabNav } from "components/atomic";
import { PageHeader } from "components/layout";

export default function CommunityDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  // TODO: Dynamic breadcrumbs
  const breadcrumbs = {
    data: [
      {
        label: "Communities",
        href: "/communities",
      },
      {
        label: `Community: ${id}`,
        href: "#",
      },
    ],
  };

  return (
    <section>
      <PageHeader title={`Community: ${id}`} breadcrumbsProps={breadcrumbs}>
        <TabNav>
          <Link href={`/communities/${id}/collections`} passHref>
            <TabNav.Tab active={view === "collections"}>
              Child Collections
            </TabNav.Tab>
          </Link>
          <Link href={`/communities/${id}/manage`} passHref>
            <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "collections" && <SubcollectionList />}
      {view === "manage" && <Manage />}
    </section>
  );
}
