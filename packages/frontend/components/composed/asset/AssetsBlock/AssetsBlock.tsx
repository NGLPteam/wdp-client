import React from "react";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./AssetsBlock.styles";
import AssetBlockItem from "./AssetBlockItem";
import { AssetsBlockFragment$key } from "@/relay/AssetsBlockFragment.graphql";
import { LoadingBlock } from "components/atomic";

const AssetsBlock = ({ data, paddingBottom = "md" }: Props) => {
  const { t } = useTranslation();
  const files = useMaybeFragment(fragment, data);
  const { loading } = usePageContext();

  return (
    <section className={`a-bg-neutral00`}>
      <Styled.SectionInner
        className="l-container-wide"
        $paddingBottom={paddingBottom}
      >
        <h3 className="t-capitalize">{t("glossary.files_plural")}</h3>
        {loading ? (
          <LoadingBlock />
        ) : files?.edges && files.edges.length > 0 ? (
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
  paddingBottom?: "md" | "xxl";
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
