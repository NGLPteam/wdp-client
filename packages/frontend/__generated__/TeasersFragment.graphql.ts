/**
 * @generated SignedSource<<cbecac4ac1596ed2ee128d84008ae7dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TeasersFragment$data = {
  readonly schema: {
    readonly identifier: string;
  };
  readonly schemaRanks: ReadonlyArray<{
    readonly count: number;
    readonly identifier: string;
    readonly namespace: string;
  }>;
  readonly updatedAt: string;
  readonly " $fragmentType": "TeasersFragment";
};
export type TeasersFragment$key = {
  readonly " $data"?: TeasersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TeasersFragment">;
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

(node as any).hash = "e15ba5de4154c6f2566c0d817561bcc3";

export default node;
