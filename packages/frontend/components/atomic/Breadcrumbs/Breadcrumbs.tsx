import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown";
import * as Styled from "./Breadcrumbs.styles";
import { BreadcrumbsFragment$key } from "@/relay/BreadcrumbsFragment.graphql";
import { EntityKind } from "types/graphql-schema";

const KIND_MAP = {
  COMMUNITY: "community",
  COLLECTION: "collection",
  ITEM: "item",
  "%future added value": null,
};

export default function BreadCrumbs({ data }: Props) {
  const breadcrumbData = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  const breadcrumbs = breadcrumbData?.breadcrumbs;

  // If the breadcrumb length is > 4, wrap middle breadcrumbs into a dropdown
  const items = useMemo(() => {
    if (!breadcrumbs) return [];

    const getLink = (
      { kind, label, slug }: { kind: EntityKind; label: string; slug: string },
      i: number
    ) => {
      const routeName = KIND_MAP[kind];

      return routeName ? (
        <NamedLink key={i} route={routeName} routeParams={{ slug }}>
          <a>{label}</a>
        </NamedLink>
      ) : null;
    };

    if (breadcrumbs.length < 4) {
      return breadcrumbs.map(getLink);
    }

    const breadcrumbItems = [];
    const dropdownItems = breadcrumbs
      .filter((o, i) => i >= 1 && i < breadcrumbs.length - 2)
      .map(getLink);

    // Add the first item
    breadcrumbItems.push(getLink(breadcrumbs[0], 0));
    // Add dropdown
    breadcrumbItems.push(
      <Dropdown
        key={1}
        label={t("breadcrumbs_dropdown_label")}
        disclosure={<button>...</button>}
        menuItems={dropdownItems}
      />
    );
    // Add last two items
    breadcrumbs
      .slice(breadcrumbs.length - 2, breadcrumbs.length)
      .map((o, i) => breadcrumbItems.push(getLink(o, i)));

    return breadcrumbItems;
  }, [breadcrumbs, t]);

  return (
    <ul className="l-flex t-copy-sm a-color-lighter">
      {items.map((crumb, i) => (
        <li key={i}>
          {crumb}
          {i < items.length - 1 && <Styled.Delimiter>/</Styled.Delimiter>}
        </li>
      ))}
    </ul>
  );
}

interface Props {
  data?: BreadcrumbsFragment$key | null;
}

export const fragment = graphql`
  fragment BreadcrumbsFragment on Entity {
    breadcrumbs {
      depth
      label
      kind
      slug
    }
  }
`;
