import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./EntityMetadataBlock.styles";

export default function EntityMetadataBlock({ children }: Props) {
  const { t } = useTranslation();

  return children ? (
    <Styled.Section className="l-container-wide">
      <h3>{t("metadata.header")}</h3>
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
    </Styled.Section>
  ) : null;
}

interface Props {
  children: React.ReactNode;
}
