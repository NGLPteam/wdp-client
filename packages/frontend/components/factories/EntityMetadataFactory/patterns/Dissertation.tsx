import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityMetadataBlock from "components/composed/entity/EntityMetadataBlock";
import { MetadataProperty } from "components/layout";
import MetadataFactory from "components/factories/MetadataFactory";
import ContributorName from "components/composed/contributor/ContributorName";

import { DissertationMetadataFragment$key } from "@/relay/DissertationMetadataFragment.graphql";

interface Props {
  data?: DissertationMetadataFragment$key | null;
}

export default function DissertationMetadata({ data }: Props) {
  const { t } = useTranslation();
  const dissertation = useMaybeFragment(fragment, data);

  const authors = dissertation?.contributions?.edges?.filter(
    ({ node }) => node.role?.toLowerCase() === "author",
  );

  return dissertation ? (
    <EntityMetadataBlock>
      <MetadataProperty
        label={t("metadata.author", { count: authors?.length ?? 1 })}
      >
        {!!authors?.length &&
          authors.map(({ node }, i) => (
            <>
              <ContributorName data={node.contributor} key={i} />
              {i < authors.length - 1 && ", "}
            </>
          ))}
      </MetadataProperty>
      <MetadataFactory
        label={t("metadata.advisor")}
        data={dissertation.advisor}
      />
      <MetadataFactory
        label={t("metadata.language")}
        data={dissertation.language}
        showPlaceholder
      />
      <MetadataFactory
        label={t("metadata.publisher")}
        data={dissertation.publisher}
      />
      <MetadataFactory
        label={t("metadata.deposited")}
        data={dissertation.accessioned}
      />
      <MetadataFactory
        label={t("metadata.available")}
        data={dissertation.available}
      />
      <MetadataFactory
        label={t("metadata.keywords")}
        data={dissertation.keywords}
      />
      <MetadataProperty label={"ISSN"}>{dissertation.issn}</MetadataProperty>
      <MetadataFactory
        label={t("metadata.license")}
        data={dissertation.ccLicense}
        showPlaceholder
      />
      <MetadataFactory
        label={t("metadata.text_version")}
        data={dissertation.textVersion}
      />
      <MetadataFactory
        label={t("metadata.pdf_version")}
        data={dissertation.pdfVersion}
      />
      <MetadataFactory
        label={t("metadata.streaming_media")}
        data={dissertation.media}
      />
    </EntityMetadataBlock>
  ) : null;
}

const fragment = graphql`
  fragment DissertationMetadataFragment on Item {
    issn
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

    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...MetadataFactoryFragment
    }
    textVersion: schemaProperty(fullPath: "text_version") {
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
    ccLicense: schemaProperty(fullPath: "cc_license") {
      ...MetadataFactoryFragment
    }
    accessioned: schemaProperty(fullPath: "accessioned") {
      ...MetadataFactoryFragment
    }
    available: schemaProperty(fullPath: "available") {
      ...MetadataFactoryFragment
    }
    media: schemaProperty(fullPath: "streaming_media") {
      ...MetadataFactoryFragment
    }
    keywords: schemaProperty(fullPath: "keywords") {
      ...MetadataFactoryFragment
    }
  }
`;
