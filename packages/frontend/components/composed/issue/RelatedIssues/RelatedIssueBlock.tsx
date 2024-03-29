import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { NamedLink, CoverImage, PrecisionDate, Link } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import { RelatedIssueBlockFragment$key } from "@/relay/RelatedIssueBlockFragment.graphql";
import * as Styled from "./RelatedIssues.styles";

export default function RelatedIssueBlock({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  const route = getRouteByEntityType(issue?.__typename);

  return issue && issue.slug ? (
    <>
      <Styled.ItemCover>
        <NamedLink href={route ? `/${route}/${issue.slug}` : "/"}>
          <Styled.ItemCoverLink>
            <CoverImage
              title={issue.title}
              id={issue.id}
              data={issue.thumbnail}
              maxWidth={263}
              maxHeight={280}
            />
          </Styled.ItemCoverLink>
        </NamedLink>
      </Styled.ItemCover>
      <Styled.ItemText>
        <h4>
          <NamedLink href={route ? `/${route}/${issue.slug}` : "/home"}>
            <Link as="span">{issue.title}</Link>
          </NamedLink>
        </h4>
        {issue.subtitle && <Styled.Subtitle>{issue.subtitle}</Styled.Subtitle>}
        <div className="t-copy-sm a-color-lighter">
          {issue.volume && <p>{issue.volume.title}</p>}
          {issue.journal && (
            <p className="t-copy-italic">{issue.journal.title}</p>
          )}
          {issue.published.value && (
            <p>
              <PrecisionDate data={issue.published} />
            </p>
          )}
          {issue.articles.pageInfo.totalCount >= 0 && (
            <p>
              {t("counts.journal_article", {
                count: issue.articles.pageInfo.totalCount,
              })}
            </p>
          )}
        </div>
      </Styled.ItemText>
    </>
  ) : null;
}

type Props = {
  data?: RelatedIssueBlockFragment$key | null;
};

const fragment = graphql`
  fragment RelatedIssueBlockFragment on Collection {
    __typename
    title
    subtitle
    slug
    id
    thumbnail {
      ...CoverImageFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        title
      }
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Collection {
        title
      }
    }
    articles: collections(schema: "nglp:journal_article") {
      pageInfo {
        totalCount
      }
    }
  }
`;
