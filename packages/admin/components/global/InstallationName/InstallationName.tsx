import * as React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import Link from "next/link";
import { useGlobalContext } from "contexts";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";
import * as Styled from "./InstallationName.styles";

export default function InstallationName() {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationNameFragment$key>(
    fragment,
    data?.globalConfiguration,
  );

  return siteData ? (
    <Link href="/" passHref legacyBehavior>
      <Styled.Link className="t-weight-md">
        {siteData.site.installationName}
      </Styled.Link>
    </Link>
  ) : null;
}

const fragment = graphql`
  fragment InstallationNameFragment on GlobalConfiguration {
    site {
      installationName
    }
  }
`;
