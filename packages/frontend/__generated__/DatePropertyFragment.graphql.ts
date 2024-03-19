/**
 * @generated SignedSource<<96137c8c23f709e926441592a10c0011>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DatePropertyFragment$data = {
  readonly date: string | null | undefined;
  readonly fullPath: string;
  readonly label: string;
  readonly " $fragmentType": "DatePropertyFragment";
};
export type DatePropertyFragment$key = {
  readonly " $data"?: DatePropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DatePropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DatePropertyFragment",
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
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "DateProperty",
  "abstractKey": null
};

(node as any).hash = "8078d205b103e104f02b4f0879c501d2";

export default node;
