/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPageUpdateDrawerQueryVariables = {
    entitySlug: string;
    pageSlug: string;
};
export type EntityPageUpdateDrawerQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageUpdateFormFragment">;
    } | null;
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageUpdateFormFragment">;
    } | null;
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageUpdateFormFragment">;
    } | null;
};
export type EntityPageUpdateDrawerQuery = {
    readonly response: EntityPageUpdateDrawerQueryResponse;
    readonly variables: EntityPageUpdateDrawerQueryVariables;
};



/*
query EntityPageUpdateDrawerQuery(
  $entitySlug: Slug!
  $pageSlug: String!
) {
  item(slug: $entitySlug) {
    ...EntityPageUpdateFormFragment
    id
  }
  collection(slug: $entitySlug) {
    ...EntityPageUpdateFormFragment
    id
  }
  community(slug: $entitySlug) {
    ...EntityPageUpdateFormFragment
    id
  }
}

fragment EntityPageUpdateFormFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Entity {
    __isEntity: __typename
    page(slug: $pageSlug) {
      id
      title
      slug
      body
      position
      heroImage {
        thumb {
          png {
            url
            height
            width
            alt
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entitySlug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pageSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityPageUpdateFormFragment"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "slug",
                "variableName": "pageSlug"
              }
            ],
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
                "name": "slug",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "body",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "heroImage",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "thumb",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageDerivative",
                        "kind": "LinkedField",
                        "name": "png",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "height",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "width",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "alt",
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
            "storageKey": null
          }
        ],
        "type": "Entity",
        "abstractKey": "__isEntity"
      }
    ],
    "type": "AnyEntity",
    "abstractKey": "__isAnyEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityPageUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v2/*: any*/),
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
    "name": "EntityPageUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fd588726c97446cb8be2cc3767a91b0b",
    "id": null,
    "metadata": {},
    "name": "EntityPageUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query EntityPageUpdateDrawerQuery(\n  $entitySlug: Slug!\n  $pageSlug: String!\n) {\n  item(slug: $entitySlug) {\n    ...EntityPageUpdateFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityPageUpdateFormFragment\n    id\n  }\n  community(slug: $entitySlug) {\n    ...EntityPageUpdateFormFragment\n    id\n  }\n}\n\nfragment EntityPageUpdateFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    page(slug: $pageSlug) {\n      id\n      title\n      slug\n      body\n      position\n      heroImage {\n        thumb {\n          png {\n            url\n            height\n            width\n            alt\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd039e78847ccf32bb8d6069cba3913fd';
export default node;
