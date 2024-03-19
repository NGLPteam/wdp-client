import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useGlobalContext } from "contexts";
import { ProviderBarFragment$key } from "@/relay/ProviderBarFragment.graphql";
import * as Styled from "./ProviderBar.styles";

const ProviderBar = () => {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<ProviderBarFragment$key>(
    fragment,
    data?.globalConfiguration,
  );

  const name = useMemo(() => {
    return siteData?.site?.providerName;
  }, [siteData]);

  return (
    <Styled.Wrapper className="a-bg-brand90">
      <span className="t-label-md">{name}</span>
    </Styled.Wrapper>
  );
};

export default ProviderBar;

const fragment = graphql`
  fragment ProviderBarFragment on GlobalConfiguration {
    site {
      providerName
    }
  }
`;
