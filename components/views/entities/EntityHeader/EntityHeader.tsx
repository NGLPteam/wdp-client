import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";
import { TabNav } from "components/atomic";

import { BreadcrumbListType } from "hooks/useBreadcrumbs";
import { EntityKind } from "types/common";
import { entityMap } from "helpers/routes";

/**
 * Takes an entity id, object, and current router view,
 * and returns a PageHeader with the entity title, breadcrumbs, and tabbed navigation.
 */
const EntityHeader = ({ type, id, title, view, breadcrumbs }: Props) => {
  function getTabs() {
    const tabs = [
      <Link key="manage" href={`/${entityMap[type]}/${id}/manage`} passHref>
        <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
      </Link>,
    ];

    if (type !== "COMMUNITY") {
      tabs.unshift(
        <Link key="items" href={`/${entityMap[type]}/${id}/items`} passHref>
          <TabNav.Tab active={view === "items"}>Child Items</TabNav.Tab>
        </Link>
      );
    }

    if (type !== "ITEM") {
      tabs.unshift(
        <Link
          key="collections"
          href={`/${entityMap[type]}/${id}/collections`}
          passHref
        >
          <TabNav.Tab active={view === "items"}>Child Collections</TabNav.Tab>
        </Link>
      );
    }

    return tabs;
  }

  return (
    <PageHeader title={title} breadcrumbsProps={{ data: breadcrumbs }}>
      <TabNav>{getTabs()}</TabNav>
    </PageHeader>
  );
};
interface Props {
  /** Entity type (COMMUNITY, COLLECTION, ITEM) */
  type: EntityKind;
  /** Entity id */
  id: string;
  /** Entity title */
  title: string;
  /** Entity breadcrumbs */
  breadcrumbs?: BreadcrumbListType;
  /** Current router view */
  view?: string;
}

export default EntityHeader;
