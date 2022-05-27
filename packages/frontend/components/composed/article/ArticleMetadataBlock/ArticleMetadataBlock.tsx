import React from "react";
import { useTranslation } from "react-i18next";
import { usePageContext } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleMetadataBlock.styles";
import { LoadingBlock } from "components/atomic";

export default function ArticleMetadataBlock({ children }: Props) {
  const { loading } = usePageContext();

  const { t } = useTranslation();

  return (
    <Styled.Section className="l-container-wide">
      <h3>{t("metadata.header")}</h3>
      {loading ? (
        <LoadingBlock />
      ) : children ? (
        <Styled.List>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return (
                <Styled.ListItem key={index}>
                  {React.cloneElement(child)}
                </Styled.ListItem>
              );
            }
          })}
        </Styled.List>
      ) : null}
    </Styled.Section>
  );
}

interface Props {
  children: React.ReactNode;
}
