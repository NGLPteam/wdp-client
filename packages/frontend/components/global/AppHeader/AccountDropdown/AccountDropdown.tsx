import React from "react";
import { useViewerContext } from "contexts";
import { Avatar } from "components/atomic";

function AccountDropdown() {
  const { avatarUrl, name } = useViewerContext();

  return (
    <div className="l-flex l-flex--align-center l-flex--gap">
      {name && <span className="t-label-mix">{name}</span>}
      {avatarUrl && <Avatar url={avatarUrl} />}
    </div>
  );
}

export default AccountDropdown;
