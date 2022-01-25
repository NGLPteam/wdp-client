/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CoverImageFragment = {
    readonly storage: AttachmentStorage | null;
    readonly medium: {
        readonly webp: {
            readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
        };
    };
    readonly " $refType": "CoverImageFragment";
};
export type CoverImageFragment$data = CoverImageFragment;
export type CoverImageFragment$key = {
    readonly " $data"?: CoverImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CoverImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "storage",
      "storageKey": null
    },
    {
      "alias": null,
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "ImageFragment"
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
(node as any).hash = '27e9018fde7d187622ed43079c597c16';
export default node;
