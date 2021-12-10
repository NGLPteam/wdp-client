import React from "react";
import Image from "next/image";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ContributorAvatar.styles";
import { ContributorAvatarFragment$key } from "@/relay/ContributorAvatarFragment.graphql";
import { IconFactory } from "components/factories";

const ContributorAvatar = ({ data }: Props) => {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.small?.webp;

  return image && image.url ? (
    <Styled.Wrapper>
      <Image src={image.url} alt={image.alt || ""} width={60} height={60} />
    </Styled.Wrapper>
  ) : (
    <IconFactory icon="avatarLarge" />
  );
};

interface Props {
  data?: ContributorAvatarFragment$key | null;
}

export default ContributorAvatar;

const fragment = graphql`
  fragment ContributorAvatarFragment on ImageAttachment {
    small {
      webp {
        alt
        url
      }
    }
  }
`;
