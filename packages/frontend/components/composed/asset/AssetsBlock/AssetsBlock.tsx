import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./AssetsBlock.styles";
import AssetBlockItem from "./AssetBlockItem";
import { AssetsBlockFragment$key } from "@/relay/AssetsBlockFragment.graphql";

const AssetsBlock = ({ data }: Props) => {
  const { t } = useTranslation();
  const files = useMaybeFragment(fragment, data);

  return (
    <section className={`a-bg-neutral00`}>
      <Styled.SectionInner className="l-container-wide">
        <h3 className="t-capitalize">{t("glossary.files_plural")}</h3>
        {files?.edges && files.edges.length > 0 ? (
          <Styled.List>
            {files.edges.map(({ node }, i) => (
              <Styled.ListItem key={i}>
                <AssetBlockItem key={i} data={node} />
              </Styled.ListItem>
            ))}
          </Styled.List>
        ) : (
          <p>No files found.</p>
        )}
      </Styled.SectionInner>
    </section>
  );
};

interface Props {
  data?: AssetsBlockFragment$key | null;
  background?: string;
}

export default AssetsBlock;

const fragment = graphql`
  fragment AssetsBlockFragment on AnyAssetConnection {
    edges {
      node {
        ...AssetBlockItemFragment
      }
    }
  }
`;
