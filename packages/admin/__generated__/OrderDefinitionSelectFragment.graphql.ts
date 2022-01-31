/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type OrderDefinitionSelectFragment = {
    readonly schemaRanks: ReadonlyArray<{
        readonly namespace: string;
        readonly identifier: string;
    }>;
    readonly " $refType": "OrderDefinitionSelectFragment";
};
export type OrderDefinitionSelectFragment$data = OrderDefinitionSelectFragment;
export type OrderDefinitionSelectFragment$key = {
    readonly " $data"?: OrderDefinitionSelectFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OrderDefinitionSelectFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderDefinitionSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HierarchicalSchemaRank",
      "kind": "LinkedField",
      "name": "schemaRanks",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "namespace",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'ec88ca087f01a755fa082665d71573a8';
export default node;
