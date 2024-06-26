import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { Button, NamedLink } from "components/atomic";
import {
  RecentIssuesFragment$data,
  RecentIssuesFragment$key,
} from "@/relay/RecentIssuesFragment.graphql";
import IssueSummary from "../IssueSummary";
import * as Styled from "./RecentIssues.styles";

export default function RecentIssues({ data, limit = 4 }: Props) {
  const issues = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  return issues?.edges && issues.edges.length > 0 ? (
    <section className="a-bg-neutral90">
      <Styled.SectionInner className="l-container-wide">
        <Styled.HeaderBlock>
          <h3 className="t-capitalize">{t("layouts.recent_issues_header")}</h3>
        </Styled.HeaderBlock>
        <Styled.List>
          {issues.edges.slice(0, limit).map(({ node }: Node) =>
            node.slug ? (
              <Styled.ListItem key={node.slug}>
                <IssueSummary data={node} showReadMore />
              </Styled.ListItem>
            ) : null,
          )}
        </Styled.List>
        {slug && (
          <Styled.ButtonWrapper>
            <NamedLink href={`/collections/${slug}/browse/issues`}>
              <Button as="div">
                <span className="t-capitalize">
                  {t("layouts.see_all_issues")}
                </span>
              </Button>
            </NamedLink>
          </Styled.ButtonWrapper>
        )}
      </Styled.SectionInner>
    </section>
  ) : null;
}

interface Props {
  /* CollectionConnection data */
  data?: RecentIssuesFragment$key | null;
  limit?: number;
}

type Node = RecentIssuesFragment$data["edges"][number];

const fragment = graphql`
  fragment RecentIssuesFragment on CollectionConnection {
    edges {
      node {
        slug
        ...IssueSummaryFragment
      }
    }
  }
`;
