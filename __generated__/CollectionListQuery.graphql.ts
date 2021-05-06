/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type CollectionListQueryVariables = {
    order?: SimpleOrder | null;
};
export type CollectionListQueryResponse = {
    readonly collections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"CollectionCardFragment">;
            } | null;
        } | null> | null;
    };
};
export type CollectionListQuery = {
    readonly response: CollectionListQueryResponse;
    readonly variables: CollectionListQueryVariables;
};



/*
query CollectionListQuery(
  $order: SimpleOrder
) {
  collections(order: $order) {
    edges {
      node {
        ...CollectionCardFragment
        id
      }
    }
  }
}

fragment CollectionCardFragment on Collection {
  id
  title
  description
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CollectionConnection",
        "kind": "LinkedField",
        "name": "collections",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CollectionCardFragment"
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CollectionConnection",
        "kind": "LinkedField",
        "name": "collections",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "node",
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
                    "name": "title",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e820787f973518856edd4d3aa7b7f46e",
    "id": null,
    "metadata": {},
    "name": "CollectionListQuery",
    "operationKind": "query",
    "text": "query CollectionListQuery(\n  $order: SimpleOrder\n) {\n  collections(order: $order) {\n    edges {\n      node {\n        ...CollectionCardFragment\n        id\n      }\n    }\n  }\n}\n\nfragment CollectionCardFragment on Collection {\n  id\n  title\n  description\n}\n"
  }
};
})();
(node as any).hash = 'b1f416bb47324a70befcdaa363ad4a79';
export default node;
