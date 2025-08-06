/**
 * @generated SignedSource<<8b45ce773e775406c0160448380f0728>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "PRESSBOOKS" | "%future added value";
export type newHarvestAttemptFromSourceQuery$variables = {
  slug: string;
};
export type newHarvestAttemptFromSourceQuery$data = {
  readonly harvestSource: {
    readonly extractionMappingTemplate: string;
    readonly id: string;
    readonly metadataFormat: HarvestMetadataFormat;
    readonly name: string;
  } | null | undefined;
};
export type newHarvestAttemptFromSourceQuery = {
  response: newHarvestAttemptFromSourceQuery$data;
  variables: newHarvestAttemptFromSourceQuery$variables;
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
        "name": "extractionMappingTemplate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "metadataFormat",
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
    "name": "newHarvestAttemptFromSourceQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newHarvestAttemptFromSourceQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "91141c9178b854751b70d89cdf026282",
    "id": null,
    "metadata": {},
    "name": "newHarvestAttemptFromSourceQuery",
    "operationKind": "query",
    "text": "query newHarvestAttemptFromSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    id\n    name\n    extractionMappingTemplate\n    metadataFormat\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb56b8bfcd40228afd151b587a5eca81";

export default node;
