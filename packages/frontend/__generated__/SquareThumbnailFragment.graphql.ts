/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SquareThumbnailFragment = {
    readonly image: {
        readonly webp: {
            readonly alt: string | null;
            readonly url: string | null;
        };
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
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageDerivative",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "alt",
              "storageKey": null
            },
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
  "type": "ImageAttachment",
  "abstractKey": null
};
(node as any).hash = '69ac7ec9ac6746803127faec7036449d';
export default node;
