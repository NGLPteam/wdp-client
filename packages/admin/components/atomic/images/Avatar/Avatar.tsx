import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { IconFactory } from "components/factories";
import { AvatarFragment$key } from "@/relay/AvatarFragment.graphql";
import Image from "../Image";
import * as Styled from "./Avatar.styles";

const Avatar = ({ data, size = 32, placeholder }: Props) => {
  const avatar = useMaybeFragment(fragment, data);

  return avatar?.storage ? (
    <Styled.Wrapper $size={size}>
      <Image data={avatar?.small?.webp} width={size} height={size} />
    </Styled.Wrapper>
  ) : placeholder ? (
    <Styled.IconWrapper $size={size}>
      <IconFactory icon="avatar32" size="lg" />
    </Styled.IconWrapper>
  ) : null;
};

interface Props {
  size?: number;
  data?: AvatarFragment$key | null;
  placeholder?: boolean;
}

export default Avatar;

const fragment = graphql`
  fragment AvatarFragment on ImageAttachment {
    storage
    small {
      webp {
        ...ImageFragment
      }
    }
  }
`;
