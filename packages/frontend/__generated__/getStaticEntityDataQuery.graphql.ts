/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getStaticEntityDataQueryVariables = {
    slug: string;
    isCommunity: boolean;
    isCollection: boolean;
    isItem: boolean;
};
export type getStaticEntityDataQueryResponse = {
    readonly community?: {
        readonly " $fragmentRefs": FragmentRefs<"getStaticEntityDataFragment">;
    } | null | undefined;
    readonly collection?: {
        readonly " $fragmentRefs": FragmentRefs<"getStaticEntityDataFragment">;
    } | null | undefined;
    readonly item?: {
        readonly " $fragmentRefs": FragmentRefs<"getStaticEntityDataFragment">;
    } | null | undefined;
};
export type getStaticEntityDataQuery = {
    readonly response: getStaticEntityDataQueryResponse;
    readonly variables: getStaticEntityDataQueryVariables;
};



/*
query getStaticEntityDataQuery(
  $slug: Slug!
  $isCommunity: Boolean!
  $isCollection: Boolean!
  $isItem: Boolean!
) {
  community(slug: $slug) @include(if: $isCommunity) {
    ...getStaticEntityDataFragment
    id
  }
  collection(slug: $slug) @include(if: $isCollection) {
    ...getStaticEntityDataFragment
    id
  }
  item(slug: $slug) @include(if: $isItem) {
    ...getStaticEntityDataFragment
    id
  }
}

fragment getStaticEntityDataFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Entity {
    __isEntity: __typename
    title
    summary
    thumbnail {
      storage
      medium {
        webp {
          url
          width
          height
        }
      }
    }
    thumbnailMetadata {
      alt
    }
    heroImage {
      storage
      medium {
        webp {
          url
          width
          height
        }
      }
    }
    heroImageMetadata {
      alt
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isCollection"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isCommunity"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isItem"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "storage",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "medium",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageDerivative",
        "kind": "LinkedField",
        "name": "webp",
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
            "name": "width",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "height",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "alt",
    "storageKey": null
  }
],
v7 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
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
          "name": "summary",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "thumbnail",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageMetadata",
          "kind": "LinkedField",
          "name": "thumbnailMetadata",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "heroImage",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageMetadata",
          "kind": "LinkedField",
          "name": "heroImageMetadata",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v8 = [
  {
    "kind": "InlineDataFragmentSpread",
    "name": "getStaticEntityDataFragment",
    "selections": [
      (v7/*: any*/)
    ]
  }
],
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getStaticEntityDataQuery",
    "selections": [
      {
        "condition": "isCommunity",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isItem",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "getStaticEntityDataQuery",
    "selections": [
      {
        "condition": "isCommunity",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isItem",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "a1f93d710a57e1fc03b5c4715abf050d",
    "id": null,
    "metadata": {},
    "name": "getStaticEntityDataQuery",
    "operationKind": "query",
    "text": "query getStaticEntityDataQuery(\n  $slug: Slug!\n  $isCommunity: Boolean!\n  $isCollection: Boolean!\n  $isItem: Boolean!\n) {\n  community(slug: $slug) @include(if: $isCommunity) {\n    ...getStaticEntityDataFragment\n    id\n  }\n  collection(slug: $slug) @include(if: $isCollection) {\n    ...getStaticEntityDataFragment\n    id\n  }\n  item(slug: $slug) @include(if: $isItem) {\n    ...getStaticEntityDataFragment\n    id\n  }\n}\n\nfragment getStaticEntityDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    summary\n    thumbnail {\n      storage\n      medium {\n        webp {\n          url\n          width\n          height\n        }\n      }\n    }\n    thumbnailMetadata {\n      alt\n    }\n    heroImage {\n      storage\n      medium {\n        webp {\n          url\n          width\n          height\n        }\n      }\n    }\n    heroImageMetadata {\n      alt\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5d27919f2c51acbeec026c8d7131baf7';
export default node;
