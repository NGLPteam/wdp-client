"use client";

import { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { Breadcrumbs, Button, Dropdown } from "components/atomic";
import { getOrigin, getRouteByEntityType } from "helpers";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { useTranslation } from "react-i18next";
import { BreadcrumbsBarFragment$key } from "@/relay/BreadcrumbsBarFragment.graphql";
import styles from "./BreadcrumbsBar.module.css";

export default function BreadcrumbsBar({
  data,
  showShare = true,
  className,
}: Props) {
  const breadcrumbData = useFragment(fragment, data);

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
    <nav className={classNames(className ?? "a-bg-custom10", styles.outer)}>
      <div className={classNames("l-container-wide", styles.inner)}>
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
                className={classNames(styles.shareLink, "share-link")}
              />,
              <Dropdown.Link
                key="fb"
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                icon="facebook"
                iconLeft
                label={t("share.facebook")}
                className={classNames(styles.shareLink, "share-link")}
              />,
              <Dropdown.Link
                key="x"
                href={`https://x.com/share?text=&url=${url}`}
                icon="x"
                iconLeft
                label={t("share.x")}
                className={classNames(styles.shareLink, "share-link")}
              />,
            ]}
          />
        )}
      </div>
    </nav>
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
