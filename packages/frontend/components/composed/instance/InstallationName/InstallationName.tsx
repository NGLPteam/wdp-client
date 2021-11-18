import * as React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import CommunityPicker from "./CommunityPicker";
import * as Styled from "./InstallationName.styles";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";

export default function InstallationName({ data }: Props) {
  const apiData = useMaybeFragment(fragment, data);

  return (
    <Styled.Wrapper className="l-flex l-flex--gap">
      <Styled.Name className="t-copy-sm">WDP Installation Name</Styled.Name>
      <CommunityPicker data={apiData} />
    </Styled.Wrapper>
  );
}

type Props = {
  data: InstallationNameFragment$key;
};

const fragment = graphql`
  fragment InstallationNameFragment on Query {
    ...CommunityPickerFragment
    # TODO: Get installation name
  }
`;
