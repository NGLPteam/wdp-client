import React from "react";
import { graphql } from "react-relay";
import Avatar from "components/atomic/images/Avatar";
import { UserAvatarFragment$key } from "@/relay/UserAvatarFragment.graphql";
import { useMaybeFragment } from "hooks";

const UserAvatar = ({ data, size = 30 }: Props) => {
  const user = useMaybeFragment(fragment, data);

  return <Avatar data={user?.avatar} size={size} />;
};

interface Props {
  data: UserAvatarFragment$key;
  size?: number;
}

export default UserAvatar;

const fragment = graphql`
  fragment UserAvatarFragment on User {
    avatar {
      ...AvatarFragment
    }
  }
`;
