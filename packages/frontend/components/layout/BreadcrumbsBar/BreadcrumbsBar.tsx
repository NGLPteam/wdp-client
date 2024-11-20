"use client";

import { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Breadcrumbs, Button, Dropdown } from "components/atomic";
import { getOrigin, getRouteByEntityType } from "helpers";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { useTranslation } from "react-i18next";
import { BreadcrumbsBarFragment$key } from "@/relay/BreadcrumbsBarFragment.graphql";
import * as Styled from "./BreadcrumbsBar.styles";

export default function BreadcrumbsBar({
  data,
  showShare = true,
  className,
}: Props) {
  const breadcrumbData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const globalData = useGlobalStaticContext();

  const url = useMemo(() => {
    if (!breadcrumbData) return null;

    const { slug, __typename: type } = breadcrumbData;

    const origin = getOrigin();

    const route = getRouteByEntityType(type);

    if (!route || !origin || !slug) return null;

    return `${origin}/${route}/${slug}`;
  }, [breadcrumbData]);

  const installation =
    globalData?.globalConfiguration?.site?.installationName || "WDP";

  return breadcrumbData ? (
    <Styled.Nav className={className ?? "a-bg-custom10"}>
      <Styled.NavInner className="l-container-wide">
        <Breadcrumbs data={breadcrumbData} />
        {showShare && (
          <Dropdown
            label={t("share.label")}
            disclosure={
              <Button as="div" size="sm" icon="share" secondary>
                {t("share.label")}
              </Button>
            }
            menuItems={[
              <Dropdown.Link
                key="fb"
                href={`mailto:?subject=${breadcrumbData.title} - ${installation}&body=View ${breadcrumbData.title} published on ${installation}.%0d%0a%0d%0a${url}`}
                icon="email"
                iconLeft
                label={t("share.email")}
              />,
              <Dropdown.Link
                key="fb"
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                icon="facebook"
                iconLeft
                label={t("share.facebook")}
              />,
              <Dropdown.Link
                key="x"
                className=""
                href={`https://x.com/share?text=&url=${url}`}
                icon="x"
                iconLeft
                label={t("share.x")}
              />,
            ]}
          />
        )}
      </Styled.NavInner>
    </Styled.Nav>
  ) : null;
}

interface Props {
  data?: BreadcrumbsBarFragment$key | null;
  showShare?: boolean;
  className?: string;
}

export const fragment = graphql`
  fragment BreadcrumbsBarFragment on Entity {
    __typename
    title
    ... on Sluggable {
      slug
    }
    ...BreadcrumbsFragment
  }
`;
