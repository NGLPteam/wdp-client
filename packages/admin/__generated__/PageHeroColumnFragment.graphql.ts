/**
 * @generated SignedSource<<3c7573a451e93086c2c054db2d6c8981>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PageHeroColumnFragment$data = {
  readonly heroImage: {
    readonly small: {
      readonly webp: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
    readonly storage: AttachmentStorage | null;
  };
  readonly " $fragmentType": "PageHeroColumnFragment";
};
export type PageHeroColumnFragment$key = {
  readonly " $data"?: PageHeroColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PageHeroColumnFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PageHeroColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "Page",
  "abstractKey": null
};

(node as any).hash = "2bdee137e768383699d2418096ce7e40";

export default node;
