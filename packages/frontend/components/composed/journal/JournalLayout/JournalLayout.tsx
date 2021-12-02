import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import JournalHero from "../JournalHero";
import { BreadcrumbsBar } from "components/layout";
import { JournalLayoutFragment$key } from "@/relay/JournalLayoutFragment.graphql";
import RelatedEntities from "components/composed/entity/RelatedEntities";
import FeaturedIssues from "components/composed/issue/FeaturedIssues";

export default function JournalLayout({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return (
    <>
      <BreadcrumbsBar data={journal} />
      <JournalHero data={journal} />
      <FeaturedIssues data={journal?.issues} />
      <RelatedEntities
        data={journal?.links}
        headerText={t("layouts.related_journals_header")}
        bodyText={`Pharetra laoreet facilisis egestas gravida sit tortor ut. Velit
        consequat tempus eleifend elit sit eget ultrices. In blandit eget
        eros, tellus condimentum augue interdum sit tristique. Pharetra
        laoreet facilisis egestas gravida sit tortor ut. Velit consequat
        tempus eleifend elit sit eget ultrices. In blandit eget eros, tellus
        condimentum augue interdum sit tristique....`} /* TODO: Where does this data come from? */
        buttonText={t("layouts.see_all_journals")}
        buttonRoute="collection" /* TODO: set to journals route */
      />
    </>
  );
}

interface Props {
  data?: JournalLayoutFragment$key | null;
}

const fragment = graphql`
  fragment JournalLayoutFragment on Collection {
    ...JournalHeroFragment
    ...BreadcrumbsBarFragment
    links(order: RECENT, perPage: 4) {
      ...RelatedEntitiesFragment
    }
    issues: collections(order: PUBLISHED_ASCENDING, perPage: 4) {
      ...FeaturedIssuesFragment
    }
  }
`;
