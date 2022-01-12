import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import RelatedJournal from "./RelatedJournal";
import * as Styled from "./RelatedJournals.styles";
import { Button, NamedLink } from "components/atomic";
import {
  RelatedJournalsFragment$data,
  RelatedJournalsFragment$key,
} from "@/relay/RelatedJournalsFragment.graphql";

export default function RelatedJournals({ data }: Props) {
  const entities = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return entities?.edges && entities.edges.length > 0 ? (
    <Styled.Section>
      <Styled.Inner className="l-container-wide">
        <Styled.HeaderBlock>
          <Styled.HeaderText className="t-capitalize">
            {t("layouts.related_journals_header")}
          </Styled.HeaderText>
        </Styled.HeaderBlock>
        <Styled.List>
          {/* The query should be limited to four results, but just in case it isn't... slicey dicey */}
          {entities.edges.slice(0, 4).map(({ node }: Node) =>
            node.slug ? (
              <li key={node.slug}>
                <RelatedJournal data={node} />
              </li>
            ) : null
          )}
        </Styled.List>
        {slug && (
          <Styled.ButtonWrapper>
            <NamedLink route="collection" routeParams={{ slug }} passHref>
              <Button as="a">
                <span className="t-capitalize">
                  {t("layouts.see_all_journals")}
                </span>
              </Button>
            </NamedLink>
          </Styled.ButtonWrapper>
        )}
      </Styled.Inner>
    </Styled.Section>
  ) : null;
}

interface Props {
  /* EntityLinkConnection data */
  data?: RelatedJournalsFragment$key | null;
}

type Node = RelatedJournalsFragment$data["edges"][number];

const fragment = graphql`
  fragment RelatedJournalsFragment on CollectionConnection {
    edges {
      node {
        slug
        ...RelatedJournalFragment
      }
    }
  }
`;
