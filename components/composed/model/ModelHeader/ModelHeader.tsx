import React from "react";
import { PageHeader } from "components/layout";
import { NamedLink, TabNav } from "components/atomic";
import { BreadcrumbListType } from "hooks/useBreadcrumbs";
import { useRouter } from "next/router";

/**
 * Takes an model id, object, and current router view,
 * and returns a PageHeader with the model title, breadcrumbs, and tabbed navigation.
 */
const ModelHeader = ({ model, id, title, breadcrumbs }: Props) => {
  const router = useRouter();
  // TODO: Refactor this once we arrive at a sustainable routing approach.
  function getTabs() {
    const getTab = (route: string, label: string) => (
      <NamedLink key="manage" route={route} routeParams={{ id }} passHref>
        {({ pathname }: { pathname: string }) => (
          <TabNav.Tab active={pathname === router.asPath}>{label}</TabNav.Tab>
        )}
      </NamedLink>
    );

    const tabs = [];

    if (["community", "collection"].includes(model)) {
      tabs.push(getTab(`${model}Collections`, "Child Collections"));
    }

    if (["community", "collection", "item"].includes(model)) {
      tabs.push(getTab(`${model}Items`, "Child Items"));
    }

    if (["contributor"].includes(model)) {
      tabs.push(getTab(`${model}Contributions`, "Contributions"));
    }

    tabs.push(getTab(`${model}Manage`, "Manage"));

    return tabs;
  }

  return (
    <PageHeader title={title} breadcrumbsProps={{ data: breadcrumbs }}>
      <TabNav>{getTabs()}</TabNav>
    </PageHeader>
  );
};

type ModelTypes = "community" | "collection" | "item" | "user" | "contributor";

interface Props {
  model: ModelTypes;
  id: string;
  title: string;
  breadcrumbs?: BreadcrumbListType;
}

export default ModelHeader;
