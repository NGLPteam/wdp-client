import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";
import { TabNav } from "components/atomic";

import { BreadcrumbListType } from "hooks/useBreadcrumbs";
import { modelMap } from "helpers/routes";

/**
 * Takes an model slug, object, and current router view,
 * and returns a PageHeader with the model title, breadcrumbs, and tabbed navigation.
 */
const ModelHeader = ({ type, slug, title, view, breadcrumbs }: Props) => {
  // TODO: Refactor this once we arrive at a sustainable routing approach.
  function getTabs() {
    const tabs = [
      <Link key="manage" href={`/${modelMap[type]}/${slug}/manage`} passHref>
        <TabNav.Tab active={view === "manage"}>Manage</TabNav.Tab>
      </Link>,
    ];

    if (!["COMMUNITY", "CONTRIBUTOR"].includes(type)) {
      tabs.unshift(
        <Link key="items" href={`/${modelMap[type]}/${slug}/items`} passHref>
          <TabNav.Tab active={view === "items"}>Child Items</TabNav.Tab>
        </Link>
      );
    }

    if (["CONTRIBUTOR"].includes(type)) {
      tabs.unshift(
        <Link
          key="contributions"
          href={`/${modelMap[type]}/${slug}/contributions`}
          passHref
        >
          <TabNav.Tab active={view === "contributions"}>
            Contributions
          </TabNav.Tab>
        </Link>
      );
    }

    if (!["ITEM", "CONTRIBUTOR"].includes(type)) {
      tabs.unshift(
        <Link
          key="collections"
          href={`/${modelMap[type]}/${slug}/collections`}
          passHref
        >
          <TabNav.Tab active={view === "collections"}>
            Child Collections
          </TabNav.Tab>
        </Link>
      );
    }

    return tabs;
  }

  return (
    <PageHeader
      title={title}
      breadcrumbsProps={{ data: breadcrumbs }}
      tabs={<TabNav>{getTabs()}</TabNav>}
    />
  );
};

type HeaderTypes = "COMMUNITY" | "COLLECTION" | "ITEM" | "USER" | "CONTRIBUTOR";

interface Props {
  type: HeaderTypes;
  slug: string;
  title: string;
  breadcrumbs?: BreadcrumbListType;
  view?: string;
}

export default ModelHeader;
