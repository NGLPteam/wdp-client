import { graphql, readInlineData } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import { getStaticGoogleScholarDataQuery } from "@/relay/getStaticGoogleScholarDataQuery.graphql";
import { getStaticGoogleScholarDataFragment$key } from "@/relay/getStaticGoogleScholarDataFragment.graphql";

export default async function getStaticGoogleScholarData(
  slug: string | undefined,
) {
  if (!slug) return;

  const { data } = await fetchQuery<getStaticGoogleScholarDataQuery>(query, {
    slug,
  });

  if (data) {
    return readInlineData<getStaticGoogleScholarDataFragment$key>(
      fragment,
      data.item || null,
    );
  }
}

const query = graphql`
  query getStaticGoogleScholarDataQuery($slug: Slug!) {
    item(slug: $slug) {
      ...getStaticGoogleScholarDataFragment
    }
  }
`;

const fragment = graphql`
  fragment getStaticGoogleScholarDataFragment on AnyEntity @inline {
    ... on Item {
      title

      schemaDefinition {
        identifier
      }

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
