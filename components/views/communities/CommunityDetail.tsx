import React from "react";
import SubcollectionList from "components/views/entities/SubcollectionList";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import { TabNav, Tab } from "components/atomic";
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
            <Tab active={view === "collections"}>Child Collections</Tab>
          </Link>
          <Link href={`/communities/${id}/manage`} passHref>
            <Tab active={view === "manage"}>Manage</Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "collections" && <SubcollectionList />}
    </section>
  );
}
