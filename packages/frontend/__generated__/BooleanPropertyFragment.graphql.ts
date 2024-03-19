/**
 * @generated SignedSource<<99741db33a4c3cabee4a0580c7d7f615>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BooleanPropertyFragment$data = {
  readonly checked: boolean | null | undefined;
  readonly fullPath: string;
  readonly label: string;
  readonly " $fragmentType": "BooleanPropertyFragment";
};
export type BooleanPropertyFragment$key = {
  readonly " $data"?: BooleanPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BooleanPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BooleanPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checked",
      "storageKey": null
    }
  ],
  "type": "BooleanProperty",
  "abstractKey": null
};

(node as any).hash = "e44ebf30476bb83371d8b137d06b34bb";

export default node;
