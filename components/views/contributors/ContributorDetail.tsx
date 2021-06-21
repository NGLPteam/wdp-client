import React from "react";
import Link from "next/link";
import { SubitemList, Manage } from "components/views/entities";
import { useGlobalData } from "hooks/useGlobalData";
import { TabNav } from "components/atomic";
import { PageHeader } from "components/layout";

export default function ContributorDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  // TODO: Dynamic breadcrumbs
  const breadcrumbs = {
    data: [
      {
        label: "Contributors",
        href: "/Contributors",
      },
      {
        label: `Contributor: ${id}`,
        href: "#",
      },
    ],
  };

  return (
    <section>
      <PageHeader title={`Contributor: ${id}`} breadcrumbsProps={breadcrumbs}>
        <TabNav>
          <Link href={`/contributors/${id}`} passHref>
            <TabNav.Tab active={view === "main"}>Main</TabNav.Tab>
          </Link>
          <Link href={`/contributors/${id}/manage`} passHref>
            <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
      {view === "Contributors" && <SubitemList />}
      {view === "manage" && <Manage />}
    </section>
  );
}
