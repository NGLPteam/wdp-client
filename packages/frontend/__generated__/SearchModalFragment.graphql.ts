/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchModalFragment = {
    readonly slug: string;
    readonly name: string;
    readonly schemaRanks: ReadonlyArray<{
        readonly slug: string;
    }>;
    readonly " $refType": "SearchModalFragment";
};
export type SearchModalFragment$data = SearchModalFragment;
export type SearchModalFragment$key = {
    readonly " $data"?: SearchModalFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchModalFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchModalFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
})();
(node as any).hash = '2c5fc2dc82fe2b1a44031ff4e51a835d';
export default node;
