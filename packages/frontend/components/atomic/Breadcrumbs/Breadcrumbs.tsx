import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Link } from "../links";
import * as Styled from "./Breadcrumbs.styles";
import BreadcrumbLink from "./BreadcrumbLink";
import { Dropdown, NamedLink } from "components/atomic";
import { BreadcrumbsFragment$key } from "@/relay/BreadcrumbsFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function BreadCrumbs({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const breadcrumbs = useMemo(() => {
    const breadcrumbs = entity?.breadcrumbs;

    if (!breadcrumbs) return [];

    return breadcrumbs.map((o, i) => <BreadcrumbLink key={i} data={o} />);
  }, [entity]);

  function renderCurrent() {
    if (!entity) return null;

    const currentRoute = getRouteByEntityType(entity.__typename);

    return currentRoute && entity.slug ? (
      <NamedLink
        route={currentRoute}
        routeParams={{ slug: entity.slug }}
        passHref
      >
        <Styled.ItemText>
          <Link aria-current="page">{entity.title}</Link>
        </Styled.ItemText>
      </NamedLink>
    ) : null;
  }

  return breadcrumbs.length > 0 ? (
    <>
      <Styled.List className="t-copy-sm" data-mobile>
        <Styled.Item>
          <Dropdown
            key={1}
            label={t("breadcrumbs_dropdown_label")}
            disclosure={<button>...</button>}
            menuItems={breadcrumbs}
          />
          <Styled.Delimiter>/</Styled.Delimiter>
        </Styled.Item>
        <li key="current">{renderCurrent()}</li>
      </Styled.List>

      <Styled.List className="t-copy-sm" data-desktop>
        {breadcrumbs.length <= 3 &&
          breadcrumbs.map((crumb, i) => (
            <Styled.Item key={i}>
              <Styled.ItemText>{crumb}</Styled.ItemText>
              <Styled.Delimiter>/</Styled.Delimiter>
            </Styled.Item>
          ))}
        {breadcrumbs.length > 3 && (
          <>
            <Styled.Item key="root">
              <Styled.ItemText>{breadcrumbs[0]}</Styled.ItemText>
              <Styled.Delimiter>/</Styled.Delimiter>
            </Styled.Item>
            <Styled.Item key="dropdown">
              <Dropdown
                key={1}
                label={t("breadcrumbs_dropdown_label")}
                disclosure={<button>...</button>}
                menuItems={breadcrumbs.slice(1, breadcrumbs.length - 1)}
              />
              <Styled.Delimiter>/</Styled.Delimiter>
            </Styled.Item>
            <Styled.Item key="parent">
              <Styled.ItemText>
                {breadcrumbs[breadcrumbs.length - 1]}
              </Styled.ItemText>
              <Styled.Delimiter>/</Styled.Delimiter>
            </Styled.Item>
          </>
        )}
        <li key="current">{renderCurrent()}</li>
      </Styled.List>
    </>
  ) : null;
}

interface Props {
  data?: BreadcrumbsFragment$key | null;
}

export const fragment = graphql`
  fragment BreadcrumbsFragment on Entity {
    __typename
    title
    breadcrumbs {
      depth
      ...BreadcrumbLinkFragment
    }

    ... on Sluggable {
      slug
    }
  }
`;
