import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { pxToRem } from "@wdp/lib/theme/functions";
import { useTranslation } from "react-i18next";
import { Button, NamedLink } from "components/atomic";
import {
  FeaturedJournalsFragment$data,
  FeaturedJournalsFragment$key,
} from "@/relay/FeaturedJournalsFragment.graphql";
import * as Styled from "./FeaturedJournals.styles";
import FeaturedJournal from "./FeaturedJournal";

export default function FeaturedJournals({ data }: Props) {
  const collections = useMaybeFragment(fragment, data);

  const entities = collections?.entities;

  const coverHeight = entities && entities.length >= 5 ? 240 : 300;

  const style = {
    "--FeaturedJournals-cover-height": pxToRem(coverHeight),
  } as React.CSSProperties;

  const { t } = useTranslation();

  const slug = useRouteSlug();

  return entities && entities.length > 0 ? (
    <Styled.Section className="a-bg-neutral00" style={style}>
      <h2 className="a-hidden">{t("layouts.featured_journals")}</h2>
      <Styled.List data-count={entities.length}>
        {entities.map((journal: Node) => (
          <Styled.ListItem key={journal.slug}>
            <FeaturedJournal data={journal} coverHeight={coverHeight} />
          </Styled.ListItem>
        ))}
      </Styled.List>
      {slug && (
        <Styled.ButtonWrapper>
          <NamedLink href={`/communities/${slug}/collections/nglp:journal`}>
            <Button as="div">{t("layouts.see_all_journals")}</Button>
          </NamedLink>
        </Styled.ButtonWrapper>
      )}
    </Styled.Section>
  ) : null;
}

interface Props {
  /** CollectionConnection data */
  data?: FeaturedJournalsFragment$key | null;
}

type Node = FeaturedJournalsFragment$data["entities"][number];

const fragment = graphql`
  fragment FeaturedJournalsFragment on EntitiesProperty {
    entities {
      ... on Sluggable {
        slug
      }
      ...FeaturedJournalFragment
    }
  }
`;
