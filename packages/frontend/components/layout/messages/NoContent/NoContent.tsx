import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./NoContent.styles";

const NoContent = ({ message }: Props) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <p className="t-h4">
        {!message
          ? t("common.no_content")
          : typeof message === "string"
            ? t(message)
            : message}
      </p>
    </Styled.Wrapper>
  );
};

interface Props {
  /** Override the default message */
  message?: string | React.ReactNode;
}

export default NoContent;
