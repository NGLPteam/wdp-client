/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FileEditDrawerQueryVariables = {
    slug: string;
};
export type FileEditDrawerQueryResponse = {
    readonly asset: {
        readonly " $fragmentRefs": FragmentRefs<"FileEditFormFragment">;
    } | null;
};
export type FileEditDrawerQuery = {
    readonly response: FileEditDrawerQueryResponse;
    readonly variables: FileEditDrawerQueryVariables;
};



/*
query FileEditDrawerQuery(
  $slug: Slug!
) {
  asset(slug: $slug) {
    __typename
    ...FileEditFormFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment FileEditFormFragment on Asset {
  __isAsset: __typename
  id
  name
  caption
  kind
  fileSize
  preview {
    alt
    thumb {
      png {
        alt
        url
      }
    }
  }
  previewMetadata {
    alt
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FileEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FileEditFormFragment"
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
    "name": "FileEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
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
                "name": "caption",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fileSize",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "preview",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "url",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageMetadata",
                "kind": "LinkedField",
                "name": "previewMetadata",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Asset",
            "abstractKey": "__isAsset"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "509ace741e797f523975e33e4d776ef1",
    "id": null,
    "metadata": {},
    "name": "FileEditDrawerQuery",
    "operationKind": "query",
    "text": "query FileEditDrawerQuery(\n  $slug: Slug!\n) {\n  asset(slug: $slug) {\n    __typename\n    ...FileEditFormFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment FileEditFormFragment on Asset {\n  __isAsset: __typename\n  id\n  name\n  caption\n  kind\n  fileSize\n  preview {\n    alt\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n  previewMetadata {\n    alt\n  }\n}\n"
  }
};
})();
(node as any).hash = '7247ca3e63b0995b864651fe6ae78f46';
export default node;
