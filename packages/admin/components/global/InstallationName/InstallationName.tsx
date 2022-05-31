import * as React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import LogoPlaceholder from "../LogoPlaceholder";
import { useGlobalContext } from "contexts";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";

export default function InstallationName() {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationNameFragment$key>(
    fragment,
    data?.globalConfiguration
  );

  return siteData ? (
    <LogoPlaceholder>
      <span className="t-weight-md">{siteData.site.installationName}</span>
    </LogoPlaceholder>
  ) : null;
}

const fragment = graphql`
  fragment InstallationNameFragment on GlobalConfiguration {
    site {
      installationName
    }
  }
`;
