/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SchemaInstancePropertyFragment = {
    readonly __typename: string;
    readonly " $fragmentRefs": FragmentRefs<"SchemaPropertyFragment" | "GroupPropertyFragment">;
    readonly " $refType": "SchemaInstancePropertyFragment";
};
export type SchemaInstancePropertyFragment$data = SchemaInstancePropertyFragment;
export type SchemaInstancePropertyFragment$key = {
    readonly " $data"?: SchemaInstancePropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"SchemaInstancePropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaInstancePropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "GroupPropertyFragment"
        }
      ],
      "type": "GroupProperty",
      "abstractKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaPropertyFragment"
    }
  ],
  "type": "AnySchemaProperty",
  "abstractKey": "__isAnySchemaProperty"
};
(node as any).hash = '4f6721403018ff64c1c868f6cb002bf8';
export default node;
