import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { pxToRem } from "@wdp/lib/theme/functions";
import { useTranslation } from "react-i18next";
import * as Styled from "./FeaturedJournals.styles";
import FeaturedJournal from "./FeaturedJournal";
import { Button, NamedLink } from "components/atomic";
import {
  FeaturedJournalsFragment$data,
  FeaturedJournalsFragment$key,
} from "@/relay/FeaturedJournalsFragment.graphql";

export default function FeaturedJournals({
  data,
  headerText,
  buttonText,
  buttonRoute,
}: Props) {
  const collections = useMaybeFragment(fragment, data);
  const coverHeight = collections && collections.edges.length >= 5 ? 240 : 300;
  const style = {
    "--FeaturedJournals-cover-height": pxToRem(coverHeight),
  } as React.CSSProperties;
  const { t } = useTranslation();
  const slug = useRouteSlug();

  const showButton = useMemo(() => {
    const total = collections?.pageInfo?.totalCount || 0;
    const perPage = collections?.pageInfo?.perPage || 0;
    return total > perPage;
  }, [collections]);

  return collections && collections.edges.length > 0 ? (
    <Styled.Section className="a-bg-neutral00" style={style}>
      <h3 className="a-hidden">{t(headerText)}</h3>
      <Styled.List>
        {collections.edges.map(({ node }: Node, i) => (
          <Styled.ListItem
            key={node.slug}
            data-count={collections.edges.length}
          >
            <FeaturedJournal data={node} index={i} coverHeight={coverHeight} />
          </Styled.ListItem>
        ))}
      </Styled.List>
      {slug && showButton && (
        <Styled.ButtonWrapper>
          <NamedLink route={buttonRoute} routeParams={{ slug }}>
            <Button as="a">{t(buttonText)}</Button>
          </NamedLink>
        </Styled.ButtonWrapper>
      )}
    </Styled.Section>
  ) : null;
}

interface Props {
  /* CollectionConnection data */
  data?: FeaturedJournalsFragment$key | null;
  /* Header text */
  headerText: string;
  /* The bottom button text */
  buttonText: string;
  /* Route for bottom button. Uses current slug for route params */
  buttonRoute: string;
}

type Node = FeaturedJournalsFragment$data["edges"][number];

const fragment = graphql`
  fragment FeaturedJournalsFragment on CollectionConnection {
    edges {
      node {
        slug
        ...FeaturedJournalFragment
      }
    }
    pageInfo {
      totalCount
      perPage
    }
  }
`;
