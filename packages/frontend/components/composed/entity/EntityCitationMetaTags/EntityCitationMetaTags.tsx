import React from "react";
import Head from "next/head";

import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityCitationMetaTagsFragment$key } from "@/relay/EntityCitationMetaTagsFragment.graphql";
import { getPrecisionCitationDateDisplay } from "helpers";
import { getContributorDisplayName } from "components/composed/contributor/ContributorName/ContributorName";

/**
 * These meta tags should only be included on the home page of an item.
 * For citation guidelines, see https://scholar.google.com/intl/en/scholar/inclusion.html#indexing
 */
export default function EntityCitationMetaTags({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const identifier = entity?.schemaDefinition?.identifier;

  // If the entity is null or the schema identifier doesn't match, return null.
  if (
    !entity ||
    !identifier ||
    !["article", "journal_article", "dissertation", "paper"].includes(
      identifier
    )
  )
    return null;

  const volume = entity.volumeNumber?.value || entity.volume?.number?.value;

  const issue = entity.issueNumber?.value || entity.issue?.number?.value;

  const startPage = entity?.startPage?.value;

  const endPage = entity?.endPage?.value;

  const pdf = entity.pdf?.asset?.downloadUrl;

  const published = getPrecisionCitationDateDisplay(
    entity.published?.precision,
    entity.published?.value
  );

  const journal = entity.journal?.title;

  const institution = entity.institution?.value || entity.community?.title;

  const authors =
    entity.contributions?.nodes?.filter(
      ({ role }: { role: string | null }) => role === "author"
    ) || [];

  return (
    <Head>
      <meta name="citation_title" content={entity.title} />
      {authors.map(({ contributor }, i) => (
        <meta
          key={i}
          name="citation_author"
          content={getContributorDisplayName(contributor, true)}
        />
      ))}
      {published && (
        <meta name="citation_publication_date" content={published} />
      )}
      {journal && <meta name="citation_journal_title" content={journal} />}
      {volume && <meta name="citation_volume" content={volume} />}
      {issue && issue !== "0" && <meta name="citation_issue" content={issue} />}
      {startPage && (
        <meta name="citation_firstpage" content={String(startPage)} />
      )}
      {endPage && <meta name="citation_lastpage" content={String(endPage)} />}
      {pdf && <meta name="citation_pdf_url" content={pdf} />}
      {institution && identifier === "dissertation" && (
        <meta name="citation_dissertation_institution" content={institution} />
      )}
      {/* citation_technical_report_institution */}
      {/* citation_technical_report_number */}
    </Head>
  );
}

interface Props {
  data?: EntityCitationMetaTagsFragment$key | null;
}

const fragment = graphql`
  fragment EntityCitationMetaTagsFragment on AnyEntity {
    ... on Entity {
      title

      schemaDefinition {
        identifier
      }
    }

    ... on Item {
      published {
        precision
        value
      }

      pdf: schemaProperty(fullPath: "pdf_version") {
        ... on AssetProperty {
          asset {
            ... on AssetPDF {
              downloadUrl
            }
          }
        }
      }

      community {
        title
      }

      contributions {
        nodes {
          role
          contributor {
            ... on PersonContributor {
              __typename
              familyName
              givenName
            }
            ... on OrganizationContributor {
              __typename
              legalName
            }
          }
        }
      }

      issueNumber: schemaProperty(fullPath: "issue.number") {
        ... on StringProperty {
          value: content
        }
      }

      volumeNumber: schemaProperty(fullPath: "volume.id") {
        ... on StringProperty {
          value: content
        }
      }

      startPage: schemaProperty(fullPath: "issue.fpage") {
        ... on IntegerProperty {
          value: integerValue
        }
      }

      endPage: schemaProperty(fullPath: "issue.lpage") {
        ... on IntegerProperty {
          value: integerValue
        }
      }

      institution: schemaProperty(fullPath: "degree.grantor") {
        ... on StringProperty {
          value: content
        }
      }

      journal: ancestorOfType(schema: "nglp:journal") {
        ... on Collection {
          title
        }
      }

      volume: ancestorOfType(schema: "nglp:journal_volume") {
        ... on Collection {
          number: schemaProperty(fullPath: "number") {
            ... on StringProperty {
              value: content
            }
          }
        }
      }

      issue: ancestorOfType(schema: "nglp:journal_issue") {
        ... on Collection {
          number: schemaProperty(fullPath: "number") {
            ... on StringProperty {
              value: content
            }
          }
        }
      }
    }
  }
`;
