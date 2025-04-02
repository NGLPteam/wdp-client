/**
 * @generated SignedSource<<2b32639bcf552293e55acf7b17f5320d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type detailsHarvestRecordQuery$variables = {
  slug: string;
};
export type detailsHarvestRecordQuery$data = {
  readonly harvestRecord: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestRecordDetailsFragment">;
  } | null | undefined;
};
export type detailsHarvestRecordQuery = {
  response: detailsHarvestRecordQuery$data;
  variables: detailsHarvestRecordQuery$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsHarvestRecordQuery",
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
            "name": "HarvestRecordDetailsFragment"
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
    "name": "detailsHarvestRecordQuery",
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
            "name": "id",
            "storageKey": null
          },
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
            "kind": "ScalarField",
            "name": "metadataFormat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rawMetadataSource",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5a5f741846074b65358cfb9f488bf04a",
    "id": null,
    "metadata": {},
    "name": "detailsHarvestRecordQuery",
    "operationKind": "query",
    "text": "query detailsHarvestRecordQuery(\n  $slug: Slug!\n) {\n  harvestRecord(slug: $slug) {\n    ...HarvestRecordDetailsFragment\n    id\n  }\n}\n\nfragment HarvestRecordDetailsFragment on HarvestRecord {\n  id\n  identifier\n  metadataFormat\n  status\n  rawMetadataSource\n}\n"
  }
};
})();

(node as any).hash = "c40126eb929a642ef8f14f845ea26688";

export default node;
