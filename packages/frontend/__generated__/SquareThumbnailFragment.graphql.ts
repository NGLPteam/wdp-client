/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SquareThumbnailFragment = {
    readonly alt: string;
    readonly image: {
        readonly webp: {
            readonly url: string;
        } | null;
    };
    readonly " $refType": "SquareThumbnailFragment";
};
export type SquareThumbnailFragment$data = SquareThumbnailFragment;
export type SquareThumbnailFragment$key = {
    readonly " $data"?: SquareThumbnailFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SquareThumbnailFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SquareThumbnailFragment",
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
      "name": "medium",
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
(node as any).hash = '9717cbc06174d3cb288c5d0dbe7b0691';
export default node;
