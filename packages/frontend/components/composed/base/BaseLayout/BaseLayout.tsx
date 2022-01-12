import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import { BaseLayoutFragment$key } from "@/relay/BaseLayoutFragment.graphql";

export default function BaseLayout({ children, data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <AppBody
      data={appData}
      communityPicker={<CommunityPicker data={appData} />}
    >
      {children}
    </AppBody>
  );
}

interface Props {
  children: React.ReactNode;
  data?: BaseLayoutFragment$key | null;
}

const fragment = graphql`
  fragment BaseLayoutFragment on Query {
    ...AppBodyFragment
    ...CommunityPickerFragment
  }
`;
