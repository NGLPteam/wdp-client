/**
 * @generated SignedSource<<5fb2aa6754a1d06ebf2789bd13eb4538>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingAddDrawerQuery$variables = {
  entitySlug: string;
};
export type EntityOrderingAddDrawerQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingAddFormFragment">;
};
export type EntityOrderingAddDrawerQuery = {
  response: EntityOrderingAddDrawerQuery$data;
  variables: EntityOrderingAddDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entitySlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
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
            "name": "namespace",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "identifier",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityOrderingAddDrawerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EntityOrderingAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntityOrderingAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dba1bbb5eb0d6f06368cd5cf4da40e6d",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  ...EntityOrderingAddFormFragment\n}\n\nfragment EntityOrderingAddFormFragment on Query {\n  collection(slug: $entitySlug) {\n    id\n    ...OrderDefinitionSelectControlFragment\n    ...SchemaCheckboxGroupFragment\n  }\n  item(slug: $entitySlug) {\n    id\n    ...OrderDefinitionSelectControlFragment\n    ...SchemaCheckboxGroupFragment\n  }\n}\n\nfragment OrderDefinitionSelectControlFragment on Entity {\n  __isEntity: __typename\n  ...OrderDefinitionSelectFragment\n}\n\nfragment OrderDefinitionSelectFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    namespace\n    identifier\n    id\n  }\n}\n\nfragment SchemaCheckboxGroupFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    name\n    namespace\n    identifier\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "82d6c209e97187ee5e84408c1a2cc853";

export default node;
