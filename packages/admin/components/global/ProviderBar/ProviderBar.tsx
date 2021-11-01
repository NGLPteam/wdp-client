import React from "react";
import appData from "fixtures/app.data";
import { useTranslation } from "react-i18next";
import * as Styled from "./ProviderBar.styles";

const ProviderBar = () => {
  const { siteInfo } = appData;
  const { t } = useTranslation();

  return (
    <Styled.Wrapper className="a-bg-brand90">
      <span className="t-label-md">{t(siteInfo.provider)}</span>
    </Styled.Wrapper>
  );
};

export default ProviderBar;
