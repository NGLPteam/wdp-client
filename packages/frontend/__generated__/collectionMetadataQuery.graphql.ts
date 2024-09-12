/**
 * @generated SignedSource<<d345bf413b471ae35b336117c2895136>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type collectionMetadataQuery$variables = {
  slug: string;
};
export type collectionMetadataQuery$data = {
  readonly collection: {
    readonly about: {
      readonly content?: string | null | undefined;
    } | null | undefined;
    readonly heroImage: {
      readonly image: {
        readonly webp: {
          readonly url: string | null | undefined;
        };
      };
    };
    readonly heroImageMetadata: {
      readonly alt: string | null | undefined;
    } | null | undefined;
    readonly thumbnail: {
      readonly image: {
        readonly webp: {
          readonly url: string | null | undefined;
        };
      };
    };
    readonly thumbnailMetadata: {
      readonly alt: string | null | undefined;
    } | null | undefined;
    readonly title: string;
  } | null | undefined;
};
export type collectionMetadataQuery = {
  response: collectionMetadataQuery$data;
  variables: collectionMetadataQuery$variables;
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
v3 = [
  {
    "alias": "image",
    "args": null,
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "large",
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "alt",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "thumbnailMetadata",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "about"
  }
],
v10 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "MarkdownProperty",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionMetadataQuery",
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
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": "about",
            "args": (v9/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v10/*: any*/)
            ],
            "storageKey": "schemaProperty(fullPath:\"about\")"
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
    "name": "collectionMetadataQuery",
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
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": "about",
            "args": (v9/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": "schemaProperty(fullPath:\"about\")"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ad1f58fc5bfa1a991f5c1880d2391150",
    "id": null,
    "metadata": {},
    "name": "collectionMetadataQuery",
    "operationKind": "query",
    "text": "query collectionMetadataQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    title\n    heroImage {\n      image: large {\n        webp {\n          url\n        }\n      }\n    }\n    heroImageMetadata {\n      alt\n    }\n    thumbnail {\n      image: large {\n        webp {\n          url\n        }\n      }\n    }\n    thumbnailMetadata {\n      alt\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2c447bfb6e56a5c597163bcfc6045284";

export default node;
