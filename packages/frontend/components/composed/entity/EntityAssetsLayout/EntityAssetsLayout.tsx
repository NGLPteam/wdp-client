import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { EntityAssetsLayoutFragment$key } from "@/relay/EntityAssetsLayoutFragment.graphql";

export default function EntityAssetsLayout({ data }: Props) {
  const contributors = useMaybeFragment(fragment, data);

  return contributors ? (
    <div>
      <h3>Files</h3>
    </div>
  ) : null;
}

interface Props {
  data?: EntityAssetsLayoutFragment$key | null;
}

const fragment = graphql`
  fragment EntityAssetsLayoutFragment on AnyAssetConnection {
    edges {
      node {
        ... on AssetAudio {
          id
        }
      }
    }
  }
`;
