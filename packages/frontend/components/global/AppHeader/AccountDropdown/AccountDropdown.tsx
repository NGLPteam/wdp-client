import React from "react";
import { useIsAuthenticated } from "@wdp/lib/api/hooks";
import * as Styled from "./AccountDropdown.styles";
import { useViewerContext } from "hooks";
import { Avatar } from "components/atomic";

function AccountDropdown() {
  const { avatarUrl, name } = useViewerContext();
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <Styled.Wrapper className="l-flex l-flex--align-center">
      {name && <span className="t-label-mix">{name}</span>}
      {avatarUrl && <Avatar url={avatarUrl} />}
    </Styled.Wrapper>
  ) : null;
}

export default AccountDropdown;
