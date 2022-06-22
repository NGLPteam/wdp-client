import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityMetadataBlock from "components/composed/entity/EntityMetadataBlock";
import { MetadataProperty } from "components/layout";
import MetadataFactory from "components/factories/MetadataFactory";
import ContributorName from "components/composed/contributor/ContributorName";

import { PaperMetadataFragment$key } from "@/relay/PaperMetadataFragment.graphql";

interface Props {
  data?: PaperMetadataFragment$key | null;
}

export default function PaperMetadata({ data }: Props) {
  const { t } = useTranslation();
  const paper = useMaybeFragment(fragment, data);

  const authors = paper?.contributions?.edges?.filter(
    ({ node }) => node.role?.toLowerCase() === "author"
  );

  return paper ? (
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
        label={t("metadata.deposited")}
        data={paper.accessioned}
      />
      <MetadataFactory label={t("metadata.available")} data={paper.available} />
      <MetadataProperty label={"ISSN"}>{paper.issn}</MetadataProperty>
      <MetadataFactory
        label={t("metadata.text_version")}
        data={paper.textVersion}
      />
      <MetadataFactory
        label={t("metadata.pdf_version")}
        data={paper.pdfVersion}
      />
    </EntityMetadataBlock>
  ) : null;
}

const fragment = graphql`
  fragment PaperMetadataFragment on Item {
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
    accessioned: schemaProperty(fullPath: "accessioned") {
      ...MetadataFactoryFragment
    }
    available: schemaProperty(fullPath: "available") {
      ...MetadataFactoryFragment
    }
  }
`;
