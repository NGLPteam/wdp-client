/**
 * @generated SignedSource<<00335254a2936788dae633d341c785c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type detailsHarvestAttemptQuery$variables = {
  slug: string;
};
export type detailsHarvestAttemptQuery$data = {
  readonly harvestAttempt: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestAttemptDetailsFragment">;
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
    "name": "detailsHarvestAttemptQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestAttempt",
        "kind": "LinkedField",
        "name": "harvestAttempt",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestAttemptDetailsFragment"
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
    "name": "detailsHarvestAttemptQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currentState",
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
            "name": "beganAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "scheduledAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "recordCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "note",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "extractionMappingTemplate",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "133fe0f9fbbc31b36934747792babbbf",
    "id": null,
    "metadata": {},
    "name": "detailsHarvestAttemptQuery",
    "operationKind": "query",
    "text": "query detailsHarvestAttemptQuery(\n  $slug: Slug!\n) {\n  harvestAttempt(slug: $slug) {\n    ...HarvestAttemptDetailsFragment\n    id\n  }\n}\n\nfragment HarvestAttemptDetailsFragment on HarvestAttempt {\n  id\n  currentState\n  metadataFormat\n  beganAt\n  endedAt\n  mode\n  scheduledAt\n  recordCount\n  note\n  extractionMappingTemplate\n}\n"
  }
};
})();

(node as any).hash = "40b169d7c4dee1df29991ffba5b6c78f";

export default node;
