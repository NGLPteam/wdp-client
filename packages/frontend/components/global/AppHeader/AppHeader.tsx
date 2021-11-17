import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import InstallationName from "../InstallationName";
import AccountDropdown from "./AccountDropdown";
import * as Styled from "./AppHeader.styles";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";

function AppHeader({ data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <Styled.Header className="a-bg-custom20">
      <Styled.HeaderInner className="l-container-wide">
        {appData && (
          <Styled.LeftSide>
            <InstallationName data={appData} />
          </Styled.LeftSide>
        )}
        <Styled.RightSide>
          <AccountDropdown />
        </Styled.RightSide>
      </Styled.HeaderInner>
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
