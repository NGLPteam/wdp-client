/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GroupPropertyFragment = {
    readonly legend: string | null;
    readonly path: string;
    readonly properties: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SchemaPropertyFragment">;
    }>;
    readonly " $refType": "GroupPropertyFragment";
};
export type GroupPropertyFragment$data = GroupPropertyFragment;
export type GroupPropertyFragment$key = {
    readonly " $data"?: GroupPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"GroupPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "legend",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "properties",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SchemaPropertyFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GroupProperty",
  "abstractKey": null
};
(node as any).hash = 'adac117c59d8a44cdfb9750e08336ba2';
export default node;
