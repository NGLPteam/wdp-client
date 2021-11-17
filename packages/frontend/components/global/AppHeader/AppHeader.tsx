import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import InstallationName from "../InstallationName";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";
import * as Styled from "./AppHeader.styles";

function AppHeader({ data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <Styled.Header className="a-bg-custom20">
      <div className="l-container-wide">
        {appData && <InstallationName data={appData} />}
      </div>
    </Styled.Header>
  );
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
