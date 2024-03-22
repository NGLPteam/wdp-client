"use client";

import React from "react";
import { graphql, useFragment } from "react-relay";
import SearchHero from "components/composed/search/SearchHero";
import { Markdown } from "components/atomic";
import { InstanceHeroFragment$key } from "@/relay/InstanceHeroFragment.graphql";
import * as Styled from "./InstanceHero.styles";

export default function InstanceHero({ data }: Props) {
  const app = useFragment(fragment, data);

  return (
    <>
      <Styled.Header as="header" className="a-bg-custom10">
        <div className="l-container-wide">
          <h2>{app?.globalConfiguration.site.installationName || "WDP"}</h2>
          {app?.globalConfiguration.site.installationHomePageCopy && (
            <Styled.Text>
              <Markdown.Summary>
                {app.globalConfiguration.site.installationHomePageCopy}
              </Markdown.Summary>
            </Styled.Text>
          )}
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
        installationHomePageCopy
      }
    }
  }
`;
