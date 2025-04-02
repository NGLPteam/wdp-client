/**
 * @generated SignedSource<<93ea6cee4c81fa029ee76148ec1482ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type detailsHarvestRecordQuery$variables = {
  slug: string;
};
export type detailsHarvestRecordQuery$data = {
  readonly harvestRecord: {
    readonly id: string;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
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
    "name": "detailsHarvestRecordQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "detailsHarvestRecordQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "94ddf532498f6062cc3068afb55a7e7e",
    "id": null,
    "metadata": {},
    "name": "detailsHarvestRecordQuery",
    "operationKind": "query",
    "text": "query detailsHarvestRecordQuery(\n  $slug: Slug!\n) {\n  harvestRecord(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "693ed757b9e4af08d12e8f57c3918f07";

export default node;
