import * as React from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";
import { useGlobalContext } from "contexts";

export default function InstallationName({ className }: Props) {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationNameFragment$key>(
    fragment,
    data?.globalConfiguration
  );

  const linkClasses = "t-label-mix a-link";

  return siteData?.site?.installationName ? (
    <Link href="/">
      <a className={className ? `${className} ${linkClasses}` : linkClasses}>
        {siteData.site.installationName}
      </a>
    </Link>
  ) : null;
}

type Props = {
  className?: string;
};

const fragment = graphql`
  fragment InstallationNameFragment on GlobalConfiguration {
    site {
      installationName
    }
  }
`;
