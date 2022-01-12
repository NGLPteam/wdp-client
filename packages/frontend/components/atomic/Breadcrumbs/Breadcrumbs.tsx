import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./Breadcrumbs.styles";
import BreadcrumbLink from "./BreadcrumbLink";
import { Dropdown } from "components/atomic";
import { BreadcrumbsFragment$key } from "@/relay/BreadcrumbsFragment.graphql";

export default function BreadCrumbs({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const breadcrumbs = useMemo(() => {
    const breadcrumbs = entity?.breadcrumbs;

    if (!breadcrumbs) return [];

    return breadcrumbs.map((o, i) => <BreadcrumbLink key={i} data={o} />);
  }, [entity]);

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
        {entity && (
          <li key="current">
            <Styled.ItemText>{entity.title}</Styled.ItemText>
          </li>
        )}
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
        {entity && (
          <li key="current">
            <Styled.ItemText>{entity.title}</Styled.ItemText>
          </li>
        )}
      </Styled.List>
    </>
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
      ...BreadcrumbLinkFragment
    }
  }
`;
