/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type AvatarFragment = {
    readonly storage: AttachmentStorage | null;
    readonly small: {
        readonly webp: {
            readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
        };
    };
    readonly " $refType": "AvatarFragment";
};
export type AvatarFragment$data = AvatarFragment;
export type AvatarFragment$key = {
    readonly " $data"?: AvatarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AvatarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AvatarFragment",
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
      "name": "small",
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
(node as any).hash = '6be8caa5ac409394435a9dffe1878d1d';
export default node;
