import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./BaseContributionsBlock.styles";

const BaseContributionsBlock = ({
  children,
  background = "custom10",
  header,
}: Props) => {
  const { t } = useTranslation();

  return children ? (
    <section className={`a-bg-${background}`} id="contributors">
      <Styled.SectionInner className="l-container-wide">
        <h3 className="t-capitalize">
          {t(header || "glossary.contributor_other")}
        </h3>
        <Styled.List>{children}</Styled.List>
      </Styled.SectionInner>
    </section>
  ) : null;
};

interface Props {
  children?: React.ReactNode;
  /** Block background color */
  background?: string;
  /** Header, default is Contributors */
  header?: string;
}

export default BaseContributionsBlock;
