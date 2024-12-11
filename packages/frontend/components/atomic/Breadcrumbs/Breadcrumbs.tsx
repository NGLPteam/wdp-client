import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Dropdown, Markdown, NamedLink } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import { BreadcrumbsFragment$key } from "@/relay/BreadcrumbsFragment.graphql";
import BreadcrumbLink from "./BreadcrumbLink";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ data }: Props) {
  const entity = useFragment(fragment, data);

  const { t } = useTranslation();

  const breadcrumbs = entity?.breadcrumbs || [];

  function renderCurrent() {
    if (!entity) return null;

    const currentRoute = getRouteByEntityType(entity.__typename);

    return currentRoute && entity.slug ? (
      <NamedLink
        className={styles.text}
        href={`/${currentRoute}/${entity.slug}`}
        aria-current="page"
      >
        <Markdown.Title>{entity.title}</Markdown.Title>
      </NamedLink>
    ) : null;
  }

  return breadcrumbs.length > 0 ? (
    <>
      <ul className={classNames("t-copy-sm", styles.listMobile)}>
        <li className={styles.item}>
          <Dropdown
            key={1}
            label={t("breadcrumbs_dropdown_label")}
            disclosure={<span className={styles.ellipsis}>...</span>}
            menuItems={breadcrumbs?.map((crumb, i) => (
              <BreadcrumbLink key={i} data={crumb} />
            ))}
          />
          <span className={styles.delimiter}>/</span>
        </li>
        <li key="current">{renderCurrent()}</li>
      </ul>

      <ul className={classNames("t-copy-sm", styles.list)}>
        {breadcrumbs.length <= 3 &&
          breadcrumbs.map((crumb, i) => (
            <li className={styles.item} key={i}>
              <BreadcrumbLink data={crumb} />
              <span className={styles.delimiter}>/</span>
            </li>
          ))}
        {breadcrumbs.length > 3 && (
          <>
            <li className={styles.item} key="root">
              <BreadcrumbLink data={breadcrumbs[0]} />
              <span className={styles.delimiter}>/</span>
            </li>
            <li key="dropdown" className={styles.item}>
              <Dropdown
                key={1}
                label={t("breadcrumbs_dropdown_label")}
                disclosure={<span className={styles.ellipsis}>...</span>}
                menuItems={breadcrumbs
                  .slice(1, breadcrumbs.length - 1)
                  .map((crumb, i) => (
                    <BreadcrumbLink key={i} data={crumb} />
                  ))}
              />
              <span className={styles.delimiter}>/</span>
            </li>
            <li className={styles.item} key="parent">
              <BreadcrumbLink data={breadcrumbs[breadcrumbs.length - 1]} />
              <span className={styles.delimiter}>/</span>
            </li>
          </>
        )}
        <li key="current">{renderCurrent()}</li>
      </ul>
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
