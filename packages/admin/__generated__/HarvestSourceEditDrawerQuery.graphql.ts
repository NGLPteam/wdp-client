/**
 * @generated SignedSource<<8d8af575e9e9dd6d128c70a93ea31e0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMetadataFormat = "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
export type HarvestSourceEditDrawerQuery$variables = {
  slug: string;
};
export type HarvestSourceEditDrawerQuery$data = {
  readonly harvestSource: {
    readonly baseURL: string;
    readonly description: string | null | undefined;
    readonly id: string;
    readonly identifier: string;
    readonly metadataFormat: HarvestMetadataFormat;
    readonly name: string;
    readonly slug: string;
  } | null | undefined;
};
export type HarvestSourceEditDrawerQuery = {
  response: HarvestSourceEditDrawerQuery$data;
  variables: HarvestSourceEditDrawerQuery$variables;
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
    "concreteType": "HarvestSource",
    "kind": "LinkedField",
    "name": "harvestSource",
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
        "name": "name",
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
        "name": "slug",
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
        "name": "baseURL",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
    "name": "HarvestSourceEditDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HarvestSourceEditDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "803bdaeae83ec527a6c7a1dd7eb242fa",
    "id": null,
    "metadata": {},
    "name": "HarvestSourceEditDrawerQuery",
    "operationKind": "query",
    "text": "query HarvestSourceEditDrawerQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    id\n    name\n    identifier\n    slug\n    metadataFormat\n    baseURL\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "8b9ae63741408e3428a1e5aa5582104e";

export default node;
