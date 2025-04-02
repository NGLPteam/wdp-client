/**
 * @generated SignedSource<<8af87933b03ccbcd92bb75ed63986444>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type detailsHarvestAttemptQuery$variables = {
  slug: string;
};
export type detailsHarvestAttemptQuery$data = {
  readonly harvestAttempt: {
    readonly id: string;
  } | null | undefined;
};
export type detailsHarvestAttemptQuery = {
  response: detailsHarvestAttemptQuery$data;
  variables: detailsHarvestAttemptQuery$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
    "concreteType": "HarvestAttempt",
    "kind": "LinkedField",
    "name": "harvestAttempt",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsHarvestAttemptQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "detailsHarvestAttemptQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c4e5e323e0008792fcad811fa0a3c2e6",
    "id": null,
    "metadata": {},
    "name": "detailsHarvestAttemptQuery",
    "operationKind": "query",
    "text": "query detailsHarvestAttemptQuery(\n  $slug: Slug!\n) {\n  harvestAttempt(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "828b61064d9875886fc47adca8a9a415";

export default node;
