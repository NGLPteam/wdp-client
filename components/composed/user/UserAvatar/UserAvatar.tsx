import React from "react";
import Avatar from "components/atomic/Avatar";
import { graphql } from "react-relay";
import { UserAvatarFragment$key } from "@/relay/UserAvatarFragment.graphql";
import { useMaybeFragment } from "hooks";

const UserAvatar = ({ data, size = 30 }: Props) => {
  const avatarData = useMaybeFragment(fragment, data);
  const image = avatarData?.avatar?.small.png;

  return <Avatar url={image?.url} alt={image?.alt} size={size} />;
};

interface Props {
  data: UserAvatarFragment$key;
  size?: number;
}

export default UserAvatar;

const fragment = graphql`
  fragment UserAvatarFragment on User {
    avatar {
      small {
        png {
          url
          alt
        }
      }
    }
  }
`;
