/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MultiselectPropertyFragment = {
    readonly options: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "MultiselectPropertyFragment";
};
export type MultiselectPropertyFragment$data = MultiselectPropertyFragment;
export type MultiselectPropertyFragment$key = {
    readonly " $data"?: MultiselectPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MultiselectPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MultiselectPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SelectOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
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
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "MultiselectProperty",
  "abstractKey": null
};
(node as any).hash = '3d56f215a92aa503989f44d1ee6682ec';
export default node;
