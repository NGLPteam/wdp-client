/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EntityKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type ItemDetailQueryVariables = {
    slug: unknown;
};
export type ItemDetailQueryResponse = {
    readonly item: {
        readonly title: string | null;
        readonly slug: unknown;
        readonly summary: string | null;
        readonly publishedOn: unknown | null;
        readonly hierarchicalDepth: number;
        readonly breadcrumbs: ReadonlyArray<{
            readonly depth: number;
            readonly label: string;
            readonly kind: EntityKind;
            readonly slug: string;
        }>;
    } | null;
};
export type ItemDetailQuery = {
    readonly response: ItemDetailQueryResponse;
    readonly variables: ItemDetailQueryVariables;
};



/*
query ItemDetailQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    title
    slug
    summary
    publishedOn
    hierarchicalDepth
    breadcrumbs {
      depth
      label
      kind
      slug
      id
    }
    id
  }
}
*/

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
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publishedOn",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hierarchicalDepth",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v10 = {
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
    "name": "ItemDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityBreadcrumb",
            "kind": "LinkedField",
            "name": "breadcrumbs",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
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
    "name": "ItemDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityBreadcrumb",
            "kind": "LinkedField",
            "name": "breadcrumbs",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v3/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f5eb7bf1304b8e44f591c03239f1e921",
    "id": null,
    "metadata": {},
    "name": "ItemDetailQuery",
    "operationKind": "query",
    "text": "query ItemDetailQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    title\n    slug\n    summary\n    publishedOn\n    hierarchicalDepth\n    breadcrumbs {\n      depth\n      label\n      kind\n      slug\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7e41b41a092db4ac0ffce747a7de464f';
export default node;
