import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleMetadataBlock.styles";
import ArticleIssueMetadata from "./ArticleIssueMetadata";
import { ArticleMetadataBlockFragment$key } from "@/relay/ArticleMetadataBlockFragment.graphql";
import MetadataFactory from "components/factories/MetadataFactory";
import { MetadataProperty } from "components/layout";
import { NamedLink, PrecisionDate } from "components/atomic";
import ContributorName from "components/composed/contributor/ContributorName";

export default function ArticleMetadataBlock({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const authors = entity?.contributions?.edges?.filter(
    ({ node }) => node.role?.toLowerCase() === "author"
  );

  const { t } = useTranslation();

  return entity ? (
    <Styled.Section className="l-container-wide">
      <h3>{t("metadata.header")}</h3>
      <Styled.List>
        <Styled.ListItem>
          <MetadataProperty label={t("metadata.journal")}>
            {entity.journal?.title ? <div>{entity.journal.title}</div> : "--"}
          </MetadataProperty>
        </Styled.ListItem>
        {entity.volumeIdMeta && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.volume")}
              data={entity.volumeIdMeta}
              showPlaceholder
            />
          </Styled.ListItem>
        )}
        {entity && (
          <>
            <Styled.ListItem>
              <ArticleIssueMetadata data={entity} />
            </Styled.ListItem>
            <Styled.ListItem>
              <MetadataProperty label={"DOI"}>
                {entity.doi ? <div>{entity.doi}</div> : "--"}
              </MetadataProperty>
            </Styled.ListItem>
            <Styled.ListItem>
              <MetadataProperty
                label={t("metadata.author", { count: authors?.length ?? 1 })}
              >
                {authors?.length
                  ? authors.map(({ node }, i) => (
                      <ContributorName data={node.contributor} key={i} />
                    ))
                  : "--"}
              </MetadataProperty>
            </Styled.ListItem>
          </>
        )}

        {entity.published.value && (
          <Styled.ListItem>
            <MetadataProperty label={t("date.published")}>
              <PrecisionDate data={entity.published} />
            </MetadataProperty>
          </Styled.ListItem>
        )}

        {entity.accessioned && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.accessioned")}
              data={entity.accessioned}
            />
          </Styled.ListItem>
        )}

        {entity.issued && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.issued")}
              data={entity.issued}
            />
          </Styled.ListItem>
        )}

        {entity.available && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.available")}
              data={entity.available}
            />
          </Styled.ListItem>
        )}

        {entity.collectedMeta && (
          <Styled.ListItem>
            <MetadataFactory data={entity.collectedMeta} />
          </Styled.ListItem>
        )}

        {entity.pageCountMeta && (
          <Styled.ListItem>
            <MetadataFactory data={entity.pageCountMeta} />
          </Styled.ListItem>
        )}

        {entity.onlineVersion && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.online_version")}
              data={entity.onlineVersion}
            />
          </Styled.ListItem>
        )}

        {entity.series && entity.series.slug && (
          <Styled.ListItem>
            <MetadataProperty label={t("metadata.series")}>
              <NamedLink
                route="collection"
                routeParams={{ slug: entity.series.slug }}
              >
                {entity.series.title}
              </NamedLink>
            </MetadataProperty>
          </Styled.ListItem>
        )}

        {entity.textVersion && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.text_version")}
              data={entity.textVersion}
            />
          </Styled.ListItem>
        )}

        {entity.pdfVersion && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.pdf_version")}
              data={entity.pdfVersion}
            />
          </Styled.ListItem>
        )}

        {entity.publisher && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.publisher")}
              data={entity.publisher}
            />
          </Styled.ListItem>
        )}

        {entity.advisor && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.advisor")}
              data={entity.advisor}
            />
          </Styled.ListItem>
        )}

        {entity.language && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.language")}
              data={entity.language}
            />
          </Styled.ListItem>
        )}

        {entity.access && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.access")}
              data={entity.access}
            />
          </Styled.ListItem>
        )}

        {entity.ccLicense && (
          <Styled.ListItem>
            <MetadataFactory
              label={t("metadata.license")}
              data={entity.ccLicense}
              showPlaceholder
            />
          </Styled.ListItem>
        )}
      </Styled.List>
    </Styled.Section>
  ) : null;
}

interface Props {
  data?: ArticleMetadataBlockFragment$key | null;
}

const fragment = graphql`
  fragment ArticleMetadataBlockFragment on Item {
    doi
    journal: ancestorOfType(schema: "nglp:journal") {
      ... on Entity {
        title
      }
    }
    contributions {
      edges {
        node {
          role
          contributor {
            ...ContributorNameFragment
          }
        }
      }
    }
    collectedMeta: schemaProperty(fullPath: "meta.collected") {
      ...MetadataFactoryFragment
    }

    pageCountMeta: schemaProperty(fullPath: "meta.page_count") {
      ...MetadataFactoryFragment
    }

    volumeIdMeta: schemaProperty(fullPath: "volume.id") {
      ...MetadataFactoryFragment
    }

    onlineVersion: schemaProperty(fullPath: "online_version") {
      ...MetadataFactoryFragment
    }

    published {
      value
      ...PrecisionDateFragment
    }

    accessioned: schemaProperty(fullPath: "accessioned") {
      ...MetadataFactoryFragment
    }

    available: schemaProperty(fullPath: "available") {
      ...MetadataFactoryFragment
    }

    issued: schemaProperty(fullPath: "issued") {
      ...MetadataFactoryFragment
    }

    series: ancestorOfType(schema: "nglp:series") {
      ... on Collection {
        title
        slug
      }
    }

    textVersion: schemaProperty(fullPath: "text_version") {
      ...MetadataFactoryFragment
    }

    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...MetadataFactoryFragment
    }

    publisher: schemaProperty(fullPath: "publisher") {
      ...MetadataFactoryFragment
    }

    advisor: schemaProperty(fullPath: "advisor") {
      ...MetadataFactoryFragment
    }

    language: schemaProperty(fullPath: "language") {
      ...MetadataFactoryFragment
    }

    access: schemaProperty(fullPath: "access") {
      ...MetadataFactoryFragment
    }
    ccLicense: schemaProperty(fullPath: "cc_license") {
      ...MetadataFactoryFragment
    }

    ...ArticleIssueMetadataFragment
  }
`;
