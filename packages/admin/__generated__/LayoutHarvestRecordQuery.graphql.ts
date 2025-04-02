/**
 * @generated SignedSource<<bac80aaa161566262aaed780f029f19a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LayoutHarvestRecordQuery$variables = {
  slug: string;
};
export type LayoutHarvestRecordQuery$data = {
  readonly harvestRecord: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestRecordLayoutFragment">;
  } | null | undefined;
};
export type LayoutHarvestRecordQuery = {
  response: LayoutHarvestRecordQuery$data;
  variables: LayoutHarvestRecordQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutHarvestRecordQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestRecord",
        "kind": "LinkedField",
        "name": "harvestRecord",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestRecordLayoutFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LayoutHarvestRecordQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestRecord",
        "kind": "LinkedField",
        "name": "harvestRecord",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "identifier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slug",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "58f27de14dceae2941950659449856d4",
    "id": null,
    "metadata": {},
    "name": "LayoutHarvestRecordQuery",
    "operationKind": "query",
    "text": "query LayoutHarvestRecordQuery(\n  $slug: Slug!\n) {\n  harvestRecord(slug: $slug) {\n    ...HarvestRecordLayoutFragment\n    id\n  }\n}\n\nfragment HarvestRecordLayoutFragment on HarvestRecord {\n  identifier\n  harvestSource {\n    slug\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "610bcdb4154a0f05c5c6c9d42c68b3fa";

export default node;
