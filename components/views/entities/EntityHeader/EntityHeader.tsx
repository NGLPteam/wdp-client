import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";
import { TabNav } from "components/atomic";

import { useBreadcrumbs } from "hooks";

const EntityHeader = ({ id, entity, view }: Props) => {
  const breadcrumbs = useBreadcrumbs(entity);

  return (
    <PageHeader title={entity.title} breadcrumbsProps={{ data: breadcrumbs }}>
      <TabNav>
        <Link href={`/items/${id}/items`} passHref>
          <TabNav.Tab active={view === "items"}>Child Items</TabNav.Tab>
        </Link>
        <Link href={`/items/${id}/manage`} passHref>
          <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
        </Link>
      </TabNav>
    </PageHeader>
  );
};

// TODO: Fix any type
interface Props {
  id: string;
  entity?: any;
  view?: string;
}

export default EntityHeader;
