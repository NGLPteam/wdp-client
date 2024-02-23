/**
 * @generated SignedSource<<c1ebbe151695034cea5c08242784466d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutFragment">;
  readonly " $fragmentType": "ItemLayoutQueryFragment";
};
export type ItemLayoutQueryFragment$key = {
  readonly " $data"?: ItemLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutQueryFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "kind": "FragmentSpread",
      "name": "ItemLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e4f9ef8de9afdbe57b3444e7534b22a9";

export default node;
