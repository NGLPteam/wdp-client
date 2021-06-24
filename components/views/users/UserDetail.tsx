import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import { TabNav } from "components/atomic";
import { PageHeader } from "components/layout";

export default function UserDetail() {
  const { activeId: id, activeView: view } = useGlobalData();
  // TODO: Dynamic breadcrumbs
  const breadcrumbs = {
    data: [
      {
        label: "Users",
        href: "/users",
      },
      {
        label: `User: ${id}`,
        href: "#",
      },
    ],
  };

  return (
    <section>
      <PageHeader title={`User: ${id}`} breadcrumbsProps={breadcrumbs}>
        <TabNav>
          <Link href={`/users/${id}/action`} passHref>
            <TabNav.Tab active={view === "action"}>
              Another Action Here
            </TabNav.Tab>
          </Link>
          <Link href={`/users/${id}/delete`} passHref>
            <TabNav.Tab active={view === "delete"}>Delete</TabNav.Tab>
          </Link>
        </TabNav>
      </PageHeader>

      {view === "main" && <div>Main</div>}
    </section>
  );
}
