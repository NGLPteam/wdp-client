"use client";

import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import SearchHero from "@/components/composed/search/SearchHero";
import { HeroTemplateFragment$key } from "@/relay/HeroTemplateFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import HeroDetail from "./Detail";
import CommunityHeroHeader from "./patterns/Community";
import EntityHeroHeader from "./patterns/Entity";

export default function HeroTemplate({
  data,
}: {
  data: HeroTemplateFragment$key | null;
}) {
  const { t } = useTranslation();

  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const {
    background,
    showBreadcrumbs,
    showSharingLink,
    showSplitDisplay,
    showBigSearchPrompt,
  } = template?.definition ?? {};

  const bigSearchPrompt = useSharedInlineFragment(
    template?.slots?.bigSearchPrompt,
  ) ?? { content: t("search.community_placeholder") };

  const renderBreadcrumbs = !!(showBreadcrumbs || showSharingLink);

  const isCommunity = entity?.__typename === "Community";

  const bgClass = getBgClass(background);

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar
          data={entity}
          showShare={showSharingLink ?? false}
          className={bgClass}
        />
      )}
      {isCommunity ? (
        <CommunityHeroHeader data={layout} />
      ) : (
        <EntityHeroHeader data={layout} />
      )}
      {showBigSearchPrompt && <SearchHero prompt={bigSearchPrompt?.content} />}
      {showSplitDisplay && (
        <Container bgColor={background}>
          <HeroDetail data={layout?.template} />
        </Container>
      )}
    </>
  );
}

const fragment = graphql`
  fragment HeroTemplateFragment on HeroLayoutInstance {
    entity {
      ... on Community {
        __typename
      }
      ...BreadcrumbsBarFragment
    }
    template {
      definition {
        background
        showBreadcrumbs
        showSharingLink
        showSplitDisplay
        showBigSearchPrompt
      }
      slots {
        bigSearchPrompt {
          ...sharedInlineSlotFragment
        }
      }
      ...DetailHeroFragment
    }
    ...CommunityHeroHeaderFragment
    ...EntityHeroHeaderFragment
  }
`;
