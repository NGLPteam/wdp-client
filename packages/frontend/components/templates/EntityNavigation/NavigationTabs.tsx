"use client";

import { graphql, useFragment } from "react-relay";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NamedLink } from "components/atomic";
import SkipLink from "components/global/SkipLink";
import { ArticleTabNavFragment$data } from "@/relay/ArticleTabNavFragment.graphql";
import { NavigationTabsFragment$key } from "@/relay/NavigationTabsFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import type { TemplateSlotInlineInstance } from "@/types/graphql-schema";
import * as Styled from "./EntityNavigation.styles";

type Node = ArticleTabNavFragment$data["pages"]["edges"][number];

type Nav = Omit<ArticleTabNavFragment$data, " $fragmentType" | "schemaVersion">;

export default function NavigationTabs({
  data,
  skipToId,
}: {
  data?: NavigationTabsFragment$key | null;
  skipToId: string;
}) {
  const slots = useFragment(fragment, data);

  const entityLabel = useSharedInlineFragment(slots?.entityLabel);
  // Todo: get route from __typename
  const route = "items";

  const { t } = useTranslation();

  const { slug } = useParams();
  const pathname = usePathname();

  function getLink(
    href: string,
    label?: TemplateSlotInlineInstance | string | null,
  ) {
    const isCurrent = pathname === href;

    const renderedLabel =
      typeof label === "string"
        ? t(label)
        : label?.valid
          ? label?.content
          : null;

    return renderedLabel ? (
      <Styled.Item key={href}>
        <NamedLink href={href} scroll={false}>
          <Styled.TabLink aria-current={isCurrent ? "page" : undefined}>
            {renderedLabel}
          </Styled.TabLink>
        </NamedLink>
      </Styled.Item>
    ) : null;
  }

  const nav: Nav = {
    assets: { pageInfo: { totalCount: 0 } },
    contributions: { pageInfo: { totalCount: 0 } },
    pages: { edges: [] },
  };

  return (
    <Styled.Nav
      className="l-container-wide"
      aria-label={t("nav.content_navigation_label")}
    >
      <SkipLink toId={skipToId} label={t("nav.skip_to_content")} />
      <Styled.List>
        {getLink(`/${route}/${slug}`, entityLabel)}
        {getLink(`/${route}/${slug}/metadata`, "nav.metadata")}
        {nav.assets?.pageInfo.totalCount > 0 &&
          getLink(`/${route}/${slug}/files`, "nav.files")}
        {nav.contributions?.pageInfo.totalCount > 0 &&
          getLink(`/${route}/${slug}/contributors`, "nav.contributors")}
        {getLink(`/${route}/${slug}/metrics`, "nav.metrics")}
        {nav.pages && nav.pages.edges.length > 0
          ? nav.pages.edges.map(({ node }: Node) =>
              getLink(`/${route}/${slug}/page/${node.slug}`, node.title),
            )
          : null}
      </Styled.List>
    </Styled.Nav>
  );
}

const fragment = graphql`
  fragment NavigationTabsFragment on NavigationTemplateInstanceSlots {
    entityLabel {
      ...sharedInlineSlotFragment
    }
  }
`;

// const fragment = graphql`
//   fragment ArticleTabNavFragment on Item {
//     schemaVersion {
//       identifier
//       name
//     }
//     pages {
//       edges {
//         node {
//           title
//           slug
//         }
//       }
//     }
//     contributions {
//       pageInfo {
//         totalCount
//       }
//     }
//     assets {
//       pageInfo {
//         totalCount
//       }
//     }
//   }
// `;
