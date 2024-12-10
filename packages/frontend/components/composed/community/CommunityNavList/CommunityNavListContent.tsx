import { useTranslation } from "react-i18next";
import { useRoutePageSlug } from "@wdp/lib/routes";
import {
  Dropdown,
  NamedLink,
  Accordion,
  NavMenuLink,
  Link,
} from "components/atomic";
import { graphql, useFragment } from "react-relay";
import { CommunityNavListContentFragment$key } from "@/__generated__/CommunityNavListContentFragment.graphql";
import { getSchemaPluralName } from "@/helpers";

interface Props {
  condensed?: boolean;
  mobile?: boolean;
  data: CommunityNavListContentFragment$key;
}

export default function CommunityNavList({
  condensed,
  mobile,
  ...props
}: Props) {
  const community = useFragment(fragment, props.data);

  const { t } = useTranslation();

  const page = useRoutePageSlug();

  const linkClassName = condensed ? "t-label-sm" : "t-label-lg";

  function getDisclosure(label: string) {
    return (
      <NavMenuLink as="div" icon="chevronDown">
        <span className={linkClassName}>{t(label)}</span>
      </NavMenuLink>
    );
  }

  const schemaLinks =
    community && community.slug
      ? community.schemaRanks?.map((schema) =>
          schema
            ? {
                href: `/communities/${
                  community.slug
                }/browse/${encodeURIComponent(schema.slug)}`,
                label: getSchemaPluralName(schema.slug, schema.name, t),
                slug: schema.slug,
              }
            : {},
        )
      : [];

  const exploreMenu = mobile ? (
    <Accordion
      label={t("nav.explore")}
      menuItems={schemaLinks?.map((link) => (
        <NamedLink key={link.slug} href={link.href}>
          <Link as="span">{link.label}</Link>
        </NamedLink>
      ))}
    />
  ) : (
    <Dropdown
      disclosure={getDisclosure("nav.explore")}
      label={t("nav.explore")}
      menuItems={schemaLinks?.map((link) => (
        <Dropdown.Link
          key={link.slug}
          href={link.href}
          label={link.label ?? ""}
        />
      ))}
    />
  );

  return community ? (
    <>
      {schemaLinks?.length > 0 && (
        <li className="t-capitalize">{exploreMenu}</li>
      )}
      {community.slug &&
        community.pages?.edges &&
        community.pages.edges.length > 0 &&
        community.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              href={`/communities/${community.slug}/page/${node.slug}`}
              aria-current={page === node.slug ? "page" : undefined}
            >
              <NavMenuLink as="span" className={linkClassName}>
                {node.title}
              </NavMenuLink>
            </NamedLink>
          </li>
        ))}
    </>
  ) : null;
}

const fragment = graphql`
  fragment CommunityNavListContentFragment on Community {
    slug
    schemaRanks {
      slug
      name
      count
      kind
    }
    pages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
