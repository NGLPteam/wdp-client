/**
 * @generated SignedSource<<4ad531f0d472843bdfd3da9294285625>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SquareThumbnailFragment$data = {
  readonly thumb: {
    readonly webp: {
      readonly alt: string | null | undefined;
      readonly url: string | null | undefined;
    };
  };
  readonly " $fragmentType": "SquareThumbnailFragment";
};
export type SquareThumbnailFragment$key = {
  readonly " $data"?: SquareThumbnailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SquareThumbnailFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SquareThumbnailFragment",
  "selections": [
    {
      "alias": "thumb",
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

(node as any).hash = "bb327a0c9f9a99e531b0e9d8077cafaf";

export default node;
