import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { useParams, usePathname } from "next/navigation";
import { Dropdown, NamedLink, NavMenuLink, Button } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import {
  EntityNavListFragment$data,
  EntityNavListFragment$key,
} from "@/relay/EntityNavListFragment.graphql";
import styles from "./EntityNavList.module.css";

export default function EntityNavList({ data }: Props) {
  const { t } = useTranslation();
  const { slug } = useParams();
  const pathname = usePathname();
  const entity = useFragment(fragment, data);

  if (!entity || !slug) return null;

  function getDisclosure(label: string) {
    return (
      <Button
        as="div"
        className={styles.disclosure}
        size="sm"
        icon="chevronDown"
        secondary
      >
        {t(label)}
      </Button>
    );
  }

  const typeRoute = getRouteByEntityType(entity.__typename);

  const orderings = entity.orderings?.nodes || [];

  const isBrowse = pathname.includes("browse");
  const showOnlyOrdering =
    orderings.length === 1 &&
    entity.schemaVersion.identifier !== "journal_issue" &&
    entity.schemaVersion.identifier !== "journal_volume";

  const schemaName = entity?.schemaVersion?.name;
  const backSchemaLabel = schemaName.replace("Journal ", "");

  const dropdownLinks =
    orderings.length > 1
      ? orderings.map(({ identifier, name, count }: Node) => (
          <Dropdown.Link
            key={identifier}
            href={`/${typeRoute}/${slug}/browse/${identifier}?context=NONE`}
            label={`${name} (${count})`}
          />
        ))
      : null;

  const button = isBrowse ? (
    /* eslint-disable-next-line react/jsx-key */
    <NamedLink href={`/${typeRoute}/${slug}`}>
      <Button size="sm" secondary icon="arrowLeft" iconLeft>
        {t("nav.back_to_entity", { schema: backSchemaLabel })}
      </Button>
    </NamedLink>
  ) : showOnlyOrdering ? (
    <NamedLink
      key={orderings[0].identifier}
      href={`/${typeRoute}/${slug}/browse/${orderings[0].identifier}`}
    >
      <Button size="sm" secondary>
        {t("nav.browse_schema", { schema: orderings[0].name })}
      </Button>
    </NamedLink>
  ) : null;

  return (
    <ul className={styles.list}>
      {button && <li className="t-capitalize">{button}</li>}
      {!!dropdownLinks?.length && (
        <li className="t-capitalize">
          <Dropdown
            label={t("nav.browse")}
            disclosure={getDisclosure("nav.browse")}
            menuItems={[...dropdownLinks]}
          />
        </li>
      )}
      {slug &&
        entity?.pages?.edges &&
        entity.pages.edges.map(({ node }) => {
          const href = `/${typeRoute}/${slug}/page/${node.slug}`;
          return (
            <li key={node.slug}>
              <NamedLink href={href}>
                <NavMenuLink
                  as="span"
                  aria-current={pathname === href ? "page" : undefined}
                >
                  <span className="t-label-sm">{node.title}</span>
                </NavMenuLink>
              </NamedLink>
            </li>
          );
        })}
    </ul>
  );
}

type Props = {
  data?: EntityNavListFragment$key | null;
};

type Node = EntityNavListFragment$data["orderings"]["nodes"][number];

const fragment = graphql`
  fragment EntityNavListFragment on Entity {
    __typename
    schemaVersion {
      name
      identifier
    }
    orderings(availability: ENABLED) {
      nodes {
        name
        slug
        identifier
        count
      }
    }
    pages {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
