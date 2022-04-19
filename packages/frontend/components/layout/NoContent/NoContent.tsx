import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./NoContent.styles";

const NoContent = ({ message }: Props) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <p className="h4">{t(message || "common.no_content")}</p>
    </Styled.Wrapper>
  );
};

interface Props {
  /** Override the default message */
  message?: string;
}

export default NoContent;
