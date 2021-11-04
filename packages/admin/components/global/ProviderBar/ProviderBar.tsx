import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./ProviderBar.styles";
import appData from "fixtures/app.data";

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
