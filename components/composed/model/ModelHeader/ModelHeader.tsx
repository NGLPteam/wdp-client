import React from "react";
import { PageHeader } from "components/layout";
import { NamedLink, TabNav } from "components/atomic";

import { BreadcrumbListType } from "hooks/useBreadcrumbs";
import { useRouter } from "next/router";
import { RouteHelper } from "helpers/routes";

/**
 * Takes an model type, object, and current router pathname
 * and returns a PageHeader with the model title, breadcrumbs, and tabbed navigation.
 */
const ModelHeader = ({ type, title, breadcrumbs }: Props) => {
  const routeName = type.toLocaleLowerCase();
  const { query } = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  function getTabs() {
    const tabs = [
      <NamedLink
        key="manage"
        route={`${routeName}.manage`}
        query={query}
        passHref
      >
        <TabNav.Tab active={activeRoute.name === `${routeName}.manage`}>
          Manage
        </TabNav.Tab>
      </NamedLink>,
    ];

    if (!["COMMUNITY", "CONTRIBUTOR"].includes(type)) {
      tabs.unshift(
        <NamedLink
          key="items"
          route={`${routeName}.child.items`}
          query={query}
          passHref
        >
          <TabNav.Tab active={activeRoute.name === `${routeName}.child.items`}>
            Child Items
          </TabNav.Tab>
        </NamedLink>
      );
    }

    if (["CONTRIBUTOR"].includes(type)) {
      tabs.unshift(
        <NamedLink
          key="contributions"
          route={`${routeName}.child.contributions`}
          query={query}
          passHref
        >
          <TabNav.Tab
            active={activeRoute.name === `${routeName}.child.contributions`}
          >
            Contributions
          </TabNav.Tab>
        </NamedLink>
      );
    }

    if (!["ITEM", "CONTRIBUTOR"].includes(type)) {
      tabs.unshift(
        <NamedLink
          key="collections"
          route={`${routeName}.child.collections`}
          query={query}
          passHref
        >
          <TabNav.Tab
            active={activeRoute.name === `${routeName}.child.collections`}
          >
            Child Collections
          </TabNav.Tab>
        </NamedLink>
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
  title: string;
  breadcrumbs?: BreadcrumbListType;
}

export default ModelHeader;
