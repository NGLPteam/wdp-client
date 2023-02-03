/**
 * @generated SignedSource<<ad641f1b17ac84746d6a7055e73ca858>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SetIntitialOrderingModalFragment$data = {
  readonly id?: string;
  readonly initOrderings?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly initial: boolean;
        readonly name: string | null;
      };
    }>;
  };
  readonly title?: string;
  readonly " $fragmentType": "SetIntitialOrderingModalFragment";
};
export type SetIntitialOrderingModalFragment$key = {
  readonly " $data"?: SetIntitialOrderingModalFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SetIntitialOrderingModalFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  {
    "alias": "initOrderings",
    "args": null,
    "concreteType": "OrderingConnection",
    "kind": "LinkedField",
    "name": "orderings",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrderingEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
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
                "kind": "ScalarField",
                "name": "initial",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetIntitialOrderingModalFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "6395532569460851ace01c83b6a85fbf";

export default node;
