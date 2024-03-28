"use client";

import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  ReadMoreLink,
  PrecisionDate,
  NamedLink,
  CoverImage,
  Link,
} from "components/atomic";
import { VolumeSummaryFragment$key } from "@/relay/VolumeSummaryFragment.graphql";
import * as Styled from "./VolumeSummary.styles";

export default function VolumeSummary({ data, showReadMore }: Props) {
  const volume = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return volume ? (
    <Styled.Wrapper>
      <Styled.ItemCoverLink>
        <NamedLink href={`/collections/${volume.slug}`}>
          <CoverImage
            id={volume.id}
            title={volume.title}
            data={volume.cover}
            maxWidth={120}
            maxHeight={160}
          />
        </NamedLink>
      </Styled.ItemCoverLink>
      <div>
        <Styled.ItemTitleBlock>
          <h4>
            <NamedLink href={`/collections/${volume.slug}`}>
              <Link as="span">{volume.title}</Link>
            </NamedLink>
          </h4>
          {volume.subtitle && (
            <h5 className="t-copy-italic">{volume.subtitle}</h5>
          )}
        </Styled.ItemTitleBlock>
        <div className="t-copy-sm">
          {volume.journal && <p>{volume.journal.title}</p>}
          <Styled.ItemPrimaryMetadata>
            {volume.published.value && (
              <li>
                <PrecisionDate
                  data={volume.published}
                  label={t("date.published")}
                />
              </li>
            )}
          </Styled.ItemPrimaryMetadata>
          {(volume.articles.pageInfo.totalCount || 0) > 0 && (
            <p className="t-copy-italic t-copy-light t-capitalize">
              {t("counts.journal_article", {
                count: volume.articles.pageInfo.totalCount,
              })}
            </p>
          )}
        </div>
        {volume.summary && (
          <Styled.ItemSummary className="t-copy-light">
            {volume.summary}
          </Styled.ItemSummary>
        )}
        {showReadMore && (
          <NamedLink href={`/collections/${volume.slug}`}>
            <Styled.ItemReadMore as={ReadMoreLink} />
          </NamedLink>
        )}
      </div>
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  /* Collection data */
  data?: VolumeSummaryFragment$key | null;
  showReadMore?: boolean;
}

const fragment = graphql`
  fragment VolumeSummaryFragment on Collection
  @argumentDefinitions(showJournal: { type: "Boolean", defaultValue: false }) {
    id
    title
    subtitle
    slug
    summary
    cover: thumbnail {
      ...CoverImageFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
    journal: ancestorOfType(schema: "nglp:journal") @include(if: $showJournal) {
      ... on Collection {
        title
      }
    }
    properties: schemaProperties {
      ... on StringProperty {
        content
        path
      }
    }
    articles: items(schema: "nglp:journal_article") {
      pageInfo {
        totalCount
      }
    }
  }
`;
