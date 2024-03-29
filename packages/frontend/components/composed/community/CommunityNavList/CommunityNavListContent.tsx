import { useTranslation } from "react-i18next";
import { useRoutePageSlug } from "@wdp/lib/routes";
import {
  Dropdown,
  NamedLink,
  Accordion,
  NavMenuLink,
  Link,
} from "components/atomic";
import { getSchemaTranslationKey } from "helpers";
import { CommunityNavListFragment$data } from "@/relay/CommunityNavListFragment.graphql";
import { PortalCommunityNavListFragment$data } from "@/relay/PortalCommunityNavListFragment.graphql";

export default function CommunityNavList({
  condensed,
  mobile,
  community,
}: Props) {
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
      ? community.schemaRanks.map((schema) => (
          <NamedLink
            key={schema.slug}
            href={
              schema.kind === "COLLECTION"
                ? `/communities/${
                    community.slug
                  }/collections/${encodeURIComponent(schema.slug)}`
                : `/communities/${community.slug}/items/${encodeURIComponent(
                    schema.slug,
                  )}`
            }
          >
            <Link as="span">
              {t(getSchemaTranslationKey(schema.slug), { count: 2 })}
            </Link>
          </NamedLink>
        ))
      : [];

  const exploreMenu = mobile ? (
    <Accordion label={t("nav.explore")} menuItems={schemaLinks} />
  ) : (
    <Dropdown
      disclosure={getDisclosure("nav.explore")}
      label={t("nav.explore")}
      menuItems={schemaLinks}
    />
  );

  return community ? (
    <>
      {schemaLinks.length > 0 && (
        <li className="t-capitalize">{exploreMenu}</li>
      )}
      {community.slug &&
        community.pages.edges &&
        community.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              href={`/communities/${community.slug}/page/${node.slug}`}
              aria-current={page === node.slug ? "page" : undefined}
            >
              <NavMenuLink as="span">
                <span className={linkClassName}>{node.title}</span>
              </NavMenuLink>
            </NamedLink>
          </li>
        ))}
    </>
  ) : null;
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
  community?:
    | CommunityNavListFragment$data
    | PortalCommunityNavListFragment$data
    | null;
}
