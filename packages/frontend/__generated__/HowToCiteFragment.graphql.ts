/**
 * @generated SignedSource<<96a0a168b2d5d81e5c6f41fc63b7ea3c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HowToCiteFragment$data = {
  readonly citation: {
    readonly content?: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "HowToCiteFragment";
};
export type HowToCiteFragment$key = {
  readonly " $data"?: HowToCiteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HowToCiteFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HowToCiteFragment",
  "selections": [
    {
      "alias": "citation",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "citation"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "content",
              "storageKey": null
            }
          ],
          "type": "MarkdownProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"citation\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "6f1450703c4d1ab26f49383366d5434c";

export default node;
