import * as React from "react";
import { CommunityPicker } from "../../atomic";
import * as Styled from "./InstallationName.styles";

export default function InstallationName({ name, communities }: Props) {
  return (
    <Styled.Wrapper className="l-flex l-flex--gap">
      <p className="t-copy-sm">{name}</p>
      <CommunityPicker communities={communities} />
    </Styled.Wrapper>
  );
}

type Props = {
  name: string;
  communities: JSX.Element[];
};
