/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TeasersFragment = {
    readonly updatedAt: string;
    readonly schema: {
        readonly identifier: string;
    };
    readonly schemaRanks: ReadonlyArray<{
        readonly count: number;
        readonly identifier: string;
        readonly namespace: string;
    }>;
    readonly " $refType": "TeasersFragment";
};
export type TeasersFragment$data = TeasersFragment;
export type TeasersFragment$key = {
    readonly " $data"?: TeasersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TeasersFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TeasersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": "schema",
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "schemaVersion",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
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
          "name": "count",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "namespace",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = 'e15ba5de4154c6f2566c0d817561bcc3';
export default node;
