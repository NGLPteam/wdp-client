import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import { NamedLink } from "components/atomic";
import UserAvatar from "components/composed/user/UserAvatar";
import { UserNameColumnCellFragment$key } from "@/relay/UserNameColumnCellFragment.graphql";

const UserNameColumnCell = ({ data }: Props) => {
  const userData = useMaybeFragment(fragment, data);

  return (
    <NamedLink
      route="user"
      routeParams={{ slug: userData?.slug || "" }}
      passHref
    >
      <a className="t-weight-md a-link l-flex l-flex--gap-sm">
        {userData && <UserAvatar data={userData} />}
        <span>{userData?.name}</span>
      </a>
    </NamedLink>
  );
};

interface Props {
  data?: UserNameColumnCellFragment$key;
}

export default UserNameColumnCell;

const fragment = graphql`
  fragment UserNameColumnCellFragment on User {
    name
    slug
    ...UserAvatarFragment
  }
`;
