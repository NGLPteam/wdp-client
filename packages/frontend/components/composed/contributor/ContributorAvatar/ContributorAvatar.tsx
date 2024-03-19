import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Avatar } from "components/atomic";
import { ContributorAvatarFragment$key } from "@/relay/ContributorAvatarFragment.graphql";

const ContributorAvatar = ({ data }: Props) => {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.small?.webp;

  return <Avatar size="lg" url={image?.url} alt={image?.alt} />;
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
