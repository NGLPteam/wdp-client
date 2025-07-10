import { useTranslation } from "react-i18next";
import { useRoutePageSlug } from "@wdp/lib/routes";
import { NamedLink, Accordion, NavMenuLink, Link } from "components/atomic";
import { graphql, useFragment } from "react-relay";
import NavDropdown from "@/components/composed/entity/EntityNavBar/EntityNavList/Dropdown";
import {
  CommunityNavListContentFragment$key,
  CommunityNavListContentFragment$data,
} from "@/__generated__/CommunityNavListContentFragment.graphql";

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

  const orderings = community.orderings?.nodes?.filter((o) => !!o.count) || [];
  const pages = community.pages?.nodes;

  const exploreMenu = mobile ? (
    <li className="t-capitalize">
      <Accordion
        label={t("nav.explore")}
        menuItems={orderings?.map((o) => (
          <NamedLink
            key={o.slug}
            href={`/communities/${community.slug}/browse/${o.identifier}`}
            prefetch
          >
            <Link as="span">{`${o.name} (${o.count})`}</Link>
          </NamedLink>
        ))}
      />
    </li>
  ) : (
    <NavDropdown<Ordering>
      label="nav.explore"
      disclosureClassName={linkClassName}
      disclosureComponent="NavMenuLink"
      items={orderings}
      getItemProps={(item) => ({
        href: `/communities/${community.slug}/browse/${item.identifier}`,
        label: `${item.name} (${item.count})`,
        prefetch: true,
      })}
    />
  );

  return community && community.slug ? (
    <>
      {!!orderings.length && exploreMenu}
      {!!pages?.length &&
        pages.map(({ slug, title }) => (
          <li key={slug}>
            <NamedLink
              href={`/communities/${community.slug}/page/${slug}`}
              aria-current={page === slug ? "page" : undefined}
              prefetch
            >
              <NavMenuLink as="span" className={linkClassName}>
                {title}
              </NavMenuLink>
            </NamedLink>
          </li>
        ))}
    </>
  ) : null;
}

type Ordering =
  CommunityNavListContentFragment$data["orderings"]["nodes"][number];

const fragment = graphql`
  fragment CommunityNavListContentFragment on Community {
    slug
    orderings(availability: ENABLED) {
      nodes {
        name
        slug
        identifier
        count
      }
    }
    pages {
      nodes {
        slug
        title
      }
    }
  }
`;
