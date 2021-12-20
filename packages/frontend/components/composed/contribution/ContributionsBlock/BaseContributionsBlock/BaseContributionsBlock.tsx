import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./BaseContributionsBlock.styles";

const BaseContributionsBlock = ({
  children,
  background = "custom10",
}: Props) => {
  const { t } = useTranslation();

  return children ? (
    <section className={`a-bg-${background}`} id="contributors">
      <Styled.SectionInner className="l-container-wide">
        <h3 className="t-capitalize">{t("glossary.contributor_plural")}</h3>
        <Styled.List>{children}</Styled.List>
      </Styled.SectionInner>
    </section>
  ) : null;
};

interface Props {
  children?: React.ReactNode;
  background?: string;
}

export default BaseContributionsBlock;
