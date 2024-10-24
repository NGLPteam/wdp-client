/**
 * @generated SignedSource<<1d2869d3c63198e62afe578f70516166>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingEditDrawerQuery$variables = {
  identifier: string;
  slug: string;
};
export type EntityOrderingEditDrawerQuery$data = {
  readonly collection: {
    readonly ordering: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFragment">;
  } | null | undefined;
  readonly item: {
    readonly ordering: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFragment">;
  } | null | undefined;
};
export type EntityOrderingEditDrawerQuery = {
  response: EntityOrderingEditDrawerQuery$data;
  variables: EntityOrderingEditDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identifier"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "identifier",
    "variableName": "identifier"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityOrderingEditFormFragment"
  },
  {
    "alias": null,
    "args": (v3/*: any*/),
    "concreteType": "Ordering",
    "kind": "LinkedField",
    "name": "ordering",
    "plural": false,
    "selections": [
      (v4/*: any*/)
    ],
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": (v3/*: any*/),
    "concreteType": "Ordering",
    "kind": "LinkedField",
    "name": "ordering",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  },
  (v6/*: any*/),
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
          (v7/*: any*/),
          (v8/*: any*/),
          (v6/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Ordering",
        "kind": "LinkedField",
        "name": "ordering",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderingRenderDefinition",
            "kind": "LinkedField",
            "name": "render",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "mode",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderDefinition",
            "kind": "LinkedField",
            "name": "order",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "path",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "direction",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderingSelectDefinition",
            "kind": "LinkedField",
            "name": "select",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "direct",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingSelectLinkDefinition",
                "kind": "LinkedField",
                "name": "links",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "contains",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "references",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderingFilterDefinition",
            "kind": "LinkedField",
            "name": "filter",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingSchemaFilter",
                "kind": "LinkedField",
                "name": "schemas",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "version",
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
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityOrderingEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EntityOrderingEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v9/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v9/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "38b9dd34a77650cdb80544c4d166d6b7",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingEditDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingEditDrawerQuery(\n  $slug: Slug!\n  $identifier: String!\n) {\n  collection(slug: $slug) {\n    ...EntityOrderingEditFormFragment\n    ordering(identifier: $identifier) {\n      name\n      id\n    }\n    id\n  }\n  item(slug: $slug) {\n    ...EntityOrderingEditFormFragment\n    ordering(identifier: $identifier) {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment EntityOrderingEditFormFragment on Entity {\n  __isEntity: __typename\n  ...OrderDefinitionSelectControlFragment\n  ...SchemaCheckboxGroupFragment\n  ordering(identifier: $identifier) {\n    id\n    name\n    render {\n      mode\n    }\n    order {\n      path\n      direction\n    }\n    select {\n      direct\n      links {\n        contains\n        references\n      }\n    }\n    filter {\n      schemas {\n        namespace\n        identifier\n        version\n      }\n    }\n  }\n}\n\nfragment OrderDefinitionSelectControlFragment on Entity {\n  __isEntity: __typename\n  ...OrderDefinitionSelectFragment\n}\n\nfragment OrderDefinitionSelectFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    namespace\n    identifier\n    id\n  }\n}\n\nfragment SchemaCheckboxGroupFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    name\n    namespace\n    identifier\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "88ff893f4b83ade07733094c9f59f73e";

export default node;
