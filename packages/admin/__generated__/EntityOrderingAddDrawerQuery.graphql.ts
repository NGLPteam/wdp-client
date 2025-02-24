/**
 * @generated SignedSource<<526f006a447eb83cf02f13fd61ff1bc0>>
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v5 = [
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v2/*: any*/)
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
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SchemaVersionConnection",
        "kind": "LinkedField",
        "name": "schemaVersions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaVersion",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v3/*: any*/),
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "43da7c929e9f08d0c92c2233f66af747",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  ...EntityOrderingAddFormFragment\n}\n\nfragment EntityOrderingAddFormFragment on Query {\n  collection(slug: $entitySlug) {\n    id\n    ...OrderDefinitionSelectControlFragment\n  }\n  item(slug: $entitySlug) {\n    id\n    ...OrderDefinitionSelectControlFragment\n  }\n  ...SchemaCheckboxGroupFragment\n}\n\nfragment OrderDefinitionSelectControlFragment on Entity {\n  __isEntity: __typename\n  ...OrderDefinitionSelectFragment\n}\n\nfragment OrderDefinitionSelectFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    namespace\n    identifier\n    id\n  }\n}\n\nfragment SchemaCheckboxGroupFragment on Query {\n  schemaVersions {\n    nodes {\n      name\n      namespace\n      identifier\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82d6c209e97187ee5e84408c1a2cc853";

export default node;
