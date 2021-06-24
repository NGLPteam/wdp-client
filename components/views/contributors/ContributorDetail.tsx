import React from "react";
import Link from "next/link";
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
        href: "/contributors",
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
          <Link href={`/contributors/${id}/action`} passHref>
            <TabNav.Tab active={view === "action"}>
              Another Action Here
            </TabNav.Tab>
          </Link>
          <Link href={`/contributors/${id}/delete`} passHref>
            <TabNav.Tab active={view === "delete"}>Delete</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
    </section>
  );
}
