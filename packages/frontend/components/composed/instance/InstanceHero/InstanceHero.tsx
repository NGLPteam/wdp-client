import React from "react";
import { graphql, useFragment } from "react-relay";
import * as Styled from "./InstanceHero.styles";
import SearchHero from "components/composed/search/SearchHero";
import { InstanceHeroFragment$key } from "@/relay/InstanceHeroFragment.graphql";

export default function InstanceHero({ data }: Props) {
  const app = useFragment(fragment, data);

  return (
    <>
      <Styled.Header as="header" className="a-bg-custom10">
        <div className="l-container-wide">
          <h2>{app?.globalConfiguration.site.installationName || "WDP"}</h2>
          <Styled.Text className="t-rte">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            orci congue, rhoncus augue vehicula, porttitor odio. Vivamus vel
            turpis laoreet, cursus tellus id, auctor odio. Vestibulum posuere
            lectus ante, sit amet mollis ex placerat non. Mauris vitae venenatis
            dolor. Nullam nulla erat, scelerisque sed aliquam vel, lacinia non
            velit.{" "}
          </Styled.Text>
        </div>
      </Styled.Header>
      <SearchHero />
    </>
  );
}

interface Props {
  data: InstanceHeroFragment$key;
}

const fragment = graphql`
  fragment InstanceHeroFragment on Query {
    globalConfiguration {
      site {
        providerName
        installationName
      }
    }
  }
`;
