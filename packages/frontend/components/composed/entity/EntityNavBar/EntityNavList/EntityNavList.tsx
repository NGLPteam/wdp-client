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

  const typeRoute = getRouteByEntityType(entity?.__typename);

  const orderings = entity?.orderings?.nodes || [];

  const hideOnlyOrdering = pathname.includes("browse");

  const schemaNameParts = entity?.schemaVersion?.name.split(" ");
  const backSchemaLabel =
    !!schemaNameParts && schemaNameParts.length > 1
      ? schemaNameParts[1]
      : entity?.schemaVersion?.name;

  const dropdownLinks = slug
    ? orderings.length > 1
      ? orderings.map(({ identifier, name, count }: Node) => (
          <Dropdown.Link
            key={identifier}
            href={`/${typeRoute}/${slug}/browse/${identifier}`}
            label={`${name} (${count})`}
          />
        ))
      : !hideOnlyOrdering
        ? orderings.map(({ identifier, name }: Node) => (
            <NamedLink
              key={identifier}
              href={`/${typeRoute}/${slug}/browse/${identifier}`}
            >
              <Button size="sm" secondary>
                {t("nav.browse_schema", { schema: name })}
              </Button>
            </NamedLink>
          ))
        : [
            /* eslint-disable-next-line react/jsx-key */
            <NamedLink href={`/${typeRoute}/${slug}`}>
              <Button size="sm" secondary icon="arrowLeft" iconLeft>
                {t("nav.back_to_entity", { schema: backSchemaLabel })}
              </Button>
            </NamedLink>,
          ]
    : [];

  return (
    <ul className={styles.list}>
      {dropdownLinks.length > 1 && (
        <li className="t-capitalize">
          <Dropdown
            label={t("nav.browse")}
            disclosure={getDisclosure("nav.browse")}
            menuItems={[...dropdownLinks]}
          />
        </li>
      )}
      {dropdownLinks.length === 1 && (
        <li className="t-capitalize">{dropdownLinks[0]}</li>
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
