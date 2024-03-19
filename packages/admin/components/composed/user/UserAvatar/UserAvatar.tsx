import { graphql } from "react-relay";
import Avatar from "components/atomic/images/Avatar";
import { useMaybeFragment } from "hooks";
import { UserAvatarFragment$key } from "@/relay/UserAvatarFragment.graphql";

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
