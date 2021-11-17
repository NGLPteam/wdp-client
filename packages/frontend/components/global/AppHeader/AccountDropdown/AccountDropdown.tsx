import React from "react";
import * as Styled from "./AccountDropdown.styles";
import { useViewerContext } from "contexts";
import { Avatar } from "components/atomic";

function AccountDropdown() {
  const { avatarUrl, name } = useViewerContext();

  return (
    <Styled.Wrapper className="l-flex l-flex--align-center">
      {name && <span className="t-label-mix">{name}</span>}
      {avatarUrl && <Avatar url={avatarUrl} />}
    </Styled.Wrapper>
  );
}

export default AccountDropdown;
