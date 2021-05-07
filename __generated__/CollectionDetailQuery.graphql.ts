/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionDetailQueryVariables = {
    slug: unknown;
};
export type CollectionDetailQueryResponse = {
    readonly collection: {
        readonly title: string;
        readonly description: string;
        readonly items: {
            readonly " $fragmentRefs": FragmentRefs<"ItemCardListFragment">;
        };
    } | null;
};
export type CollectionDetailQuery = {
    readonly response: CollectionDetailQueryResponse;
    readonly variables: CollectionDetailQueryVariables;
};



/*
query CollectionDetailQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
    title
    description
    items {
      ...ItemCardListFragment
    }
    id
  }
}

fragment ItemCardFragment on Item {
  slug
  title
  description
}

fragment ItemCardListFragment on ItemConnection {
  edges {
    node {
      ...ItemCardFragment
      id
    }
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
  "name": "description",
  "storageKey": null
},
v4 = {
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
    "name": "CollectionDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ItemCardListFragment"
              }
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
    "name": "CollectionDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Item",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "slug",
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "05197591aa885dfca6751b301c2607e9",
    "id": null,
    "metadata": {},
    "name": "CollectionDetailQuery",
    "operationKind": "query",
    "text": "query CollectionDetailQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    title\n    description\n    items {\n      ...ItemCardListFragment\n    }\n    id\n  }\n}\n\nfragment ItemCardFragment on Item {\n  slug\n  title\n  description\n}\n\nfragment ItemCardListFragment on ItemConnection {\n  edges {\n    node {\n      ...ItemCardFragment\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8fc40e835f1316b129c3a7cf262aef77';
export default node;
