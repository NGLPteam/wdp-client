/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HeroImageFragment = {
    readonly alt: string;
    readonly image: {
        readonly webp: {
            readonly url: string;
        } | null;
    };
    readonly " $refType": "HeroImageFragment";
};
export type HeroImageFragment$data = HeroImageFragment;
export type HeroImageFragment$key = {
    readonly " $data"?: HeroImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alt",
      "storageKey": null
    },
    {
      "alias": "image",
      "args": null,
      "concreteType": "PreviewImageMap",
      "kind": "LinkedField",
      "name": "large",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImage",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetPreview",
  "abstractKey": null
};
(node as any).hash = 'c857ff685c8771e89f5f7c395733f698';
export default node;