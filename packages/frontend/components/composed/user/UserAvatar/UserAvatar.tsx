import React from "react";
import { graphql } from "react-relay";
import Avatar from "components/atomic/Avatar";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { UserAvatarFragment$key } from "@/relay/UserAvatarFragment.graphql";

type AvatarProps = React.ComponentProps<typeof Avatar>;

const UserAvatar = ({ data, size = "sm" }: Props) => {
  const avatarData = useMaybeFragment(fragment, data);
  const image = avatarData?.avatar?.small.png;

  return <Avatar url={image?.url} alt={image?.alt} size={size} />;
};

interface Props {
  data: UserAvatarFragment$key;
  size?: AvatarProps["size"];
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
