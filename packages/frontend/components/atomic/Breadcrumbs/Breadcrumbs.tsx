import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown";
import { NamedLink } from "..";
import * as Styled from "./Breadcrumbs.styles";
import { BreadcrumbsFragment$key } from "@/relay/BreadcrumbsFragment.graphql";
import { EntityKind } from "types/graphql-schema";
import { getRouteByEntityKind } from "helpers";

export default function BreadCrumbs({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  // If the breadcrumb length is > 4, wrap middle breadcrumbs into a dropdown
  const items = useMemo(() => {
    const breadcrumbs = entity?.breadcrumbs;

    if (!breadcrumbs) return [];

    const getLink = (
      { kind, label, slug }: { kind: EntityKind; label: string; slug: string },
      i: number
    ) => {
      const routeName = getRouteByEntityKind(kind);

      return routeName ? (
        <NamedLink key={i} route={routeName} routeParams={{ slug }}>
          <a>{label}</a>
        </NamedLink>
      ) : null;
    };

    if (breadcrumbs.length < 3) {
      return breadcrumbs.map(getLink);
    }

    const breadcrumbItems = [];
    const dropdownItems = breadcrumbs
      .filter((o, i) => i >= 1 && i < breadcrumbs.length - 1)
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
    // Add the last item
    breadcrumbs
      .slice(breadcrumbs.length - 1, breadcrumbs.length)
      .map((o, i) => breadcrumbItems.push(getLink(o, i)));

    return breadcrumbItems;
  }, [entity, t]);

  return items.length > 0 ? (
    <ul className="l-flex t-copy-sm">
      {items.map((crumb, i) => (
        <li key={i} className="a-color-lighter l-flex">
          <Styled.ItemText>{crumb}</Styled.ItemText>
          <Styled.Delimiter>/</Styled.Delimiter>
        </li>
      ))}
      {entity && (
        <li key="current">
          <Styled.ItemText>{entity.title}</Styled.ItemText>
        </li>
      )}
    </ul>
  ) : null;
}

interface Props {
  data?: BreadcrumbsFragment$key | null;
}

export const fragment = graphql`
  fragment BreadcrumbsFragment on Entity {
    title
    breadcrumbs {
      depth
      label
      kind
      slug
    }
  }
`;
