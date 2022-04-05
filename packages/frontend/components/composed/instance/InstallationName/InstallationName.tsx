import * as React from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";

export default function InstallationName({ data, className }: Props) {
  const siteData = useMaybeFragment(fragment, data);

  const linkClasses = "t-label-mix a-link";

  return siteData ? (
    <Link href="/">
      <a className={className ? `${className} ${linkClasses}` : linkClasses}>
        {siteData.globalConfiguration.site.installationName}
      </a>
    </Link>
  ) : null;
}

type Props = {
  data?: InstallationNameFragment$key | null;
  className?: string;
};

const fragment = graphql`
  fragment InstallationNameFragment on Query {
    globalConfiguration {
      site {
        installationName
      }
    }
  }
`;
