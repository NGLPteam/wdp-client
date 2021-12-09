/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityPageLayoutFragment = {
    readonly title: string;
    readonly body: string;
    readonly heroImage: {
        readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
    };
    readonly " $refType": "CommunityPageLayoutFragment";
};
export type CommunityPageLayoutFragment$data = CommunityPageLayoutFragment;
export type CommunityPageLayoutFragment$key = {
    readonly " $data"?: CommunityPageLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityPageLayoutFragment">;
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
    }
  ],
  "type": "Page",
  "abstractKey": null
};
(node as any).hash = 'a90b6f515245a32e8f581339c18d0470';
export default node;
