import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import InstallationName from "../InstallationName";
import { AppHeaderFragment$key } from "../../../__generated__/AppHeaderFragment.graphql";

function AppHeader({ data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return <header>{appData && <InstallationName data={appData} />}</header>;
}

interface Props {
  data?: AppHeaderFragment$key | null;
}

export default AppHeader;

const fragment = graphql`
  fragment AppHeaderFragment on Query {
    ...InstallationNameFragment
  }
`;
