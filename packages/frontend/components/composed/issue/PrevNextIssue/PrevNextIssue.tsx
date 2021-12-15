import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./PrevNextIssue.styles";
import { PrevNextIssueFragment$key } from "@/relay/PrevNextIssueFragment.graphql";

export default function PrevNextIssue({ data }: Props) {
  const { t } = useTranslation();
  const item = useMaybeFragment(fragment, data);
  const issues = item?.volume?.collections?.edges;
  return issues ? (
    <Styled.Outer className="a-bg-custom10">
      <Styled.Inner className="l-container-wide l-flex l-flex--gap">
        <Styled.FixedWidthButton iconLeft icon="arrowLeft">
          {t("nav.previous_issue")}
        </Styled.FixedWidthButton>
        <Styled.FixedWidthButton icon="arrowRight">
          {t("nav.next_issue")}
        </Styled.FixedWidthButton>
      </Styled.Inner>
    </Styled.Outer>
  ) : null;
}

type Props = {
  data?: PrevNextIssueFragment$key | null;
};

const fragment = graphql`
  fragment PrevNextIssueFragment on Collection {
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        collections(schema: ["nglp:journal_issue"]) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    }
  }
`;
