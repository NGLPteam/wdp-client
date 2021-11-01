import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import { NamedLink } from "components/atomic";
import UserAvatar from "components/composed/user/UserAvatar";
import { UserNameColumnCellFragment$key } from "@/relay/UserNameColumnCellFragment.graphql";
import * as Styled from "./UserNameColumnCell.styles";

const UserNameColumnCell = ({ data }: Props) => {
  const userData = useMaybeFragment(fragment, data);

  return (
    <NamedLink
      route="user"
      routeParams={{ slug: userData?.slug || "" }}
      passHref
    >
      <Styled.Link className="t-weight-md a-link">
        {userData && <UserAvatar data={userData} />}
        <span>{userData?.name}</span>
      </Styled.Link>
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
