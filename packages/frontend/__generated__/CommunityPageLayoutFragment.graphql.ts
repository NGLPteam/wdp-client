/**
 * @generated SignedSource<<ab56bd4381d66ddcc009afb08ab83696>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityPageLayoutFragment$data = {
  readonly body: string;
  readonly heroImage: {
    readonly " $fragmentSpreads": FragmentRefs<"HeroImageFragment">;
  };
  readonly heroImageMetadata: {
    readonly " $fragmentSpreads": FragmentRefs<"HeroImageMetadataFragment">;
  } | null | undefined;
  readonly title: string;
  readonly " $fragmentType": "CommunityPageLayoutFragment";
};
export type CommunityPageLayoutFragment$key = {
  readonly " $data"?: CommunityPageLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityPageLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityPageLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageMetadata",
      "kind": "LinkedField",
      "name": "heroImageMetadata",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroImageMetadataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Page",
  "abstractKey": null
};

(node as any).hash = "f4957dd0cba0c6ce31e41e43560caa95";

export default node;
