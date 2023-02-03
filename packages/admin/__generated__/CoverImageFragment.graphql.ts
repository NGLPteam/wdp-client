/**
 * @generated SignedSource<<426dfc872a40afa47679c85f19bb3b2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CoverImageFragment$data = {
  readonly medium: {
    readonly webp: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
    };
  };
  readonly storage: AttachmentStorage | null;
  readonly " $fragmentType": "CoverImageFragment";
};
export type CoverImageFragment$key = {
  readonly " $data"?: CoverImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
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

(node as any).hash = "27e9018fde7d187622ed43079c597c16";

export default node;
