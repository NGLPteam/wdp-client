/**
 * @generated SignedSource<<09c29323a03bc55f33d85ec9939dfbe8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type itemMetadataQuery$variables = {
  slug: string;
};
export type itemMetadataQuery$data = {
  readonly item: {
    readonly about: {
      readonly content?: string | null | undefined;
    } | null | undefined;
    readonly abstract: {
      readonly fullText?: {
        readonly content: string | null | undefined;
      } | null | undefined;
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
export type itemMetadataQuery = {
  response: itemMetadataQuery$data;
  variables: itemMetadataQuery$variables;
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
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  }
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "MarkdownProperty",
  "abstractKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "abstract"
  }
],
v13 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FullText",
      "kind": "LinkedField",
      "name": "fullText",
      "plural": false,
      "selections": (v10/*: any*/),
      "storageKey": null
    }
  ],
  "type": "FullTextProperty",
  "abstractKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "itemMetadataQuery",
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
              (v11/*: any*/)
            ],
            "storageKey": "schemaProperty(fullPath:\"about\")"
          },
          {
            "alias": "abstract",
            "args": (v12/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v13/*: any*/)
            ],
            "storageKey": "schemaProperty(fullPath:\"abstract\")"
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
    "name": "itemMetadataQuery",
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
              (v14/*: any*/),
              (v11/*: any*/)
            ],
            "storageKey": "schemaProperty(fullPath:\"about\")"
          },
          {
            "alias": "abstract",
            "args": (v12/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v14/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": "schemaProperty(fullPath:\"abstract\")"
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
    "cacheID": "35313cc90fe9cc79c8523b9f2531adb1",
    "id": null,
    "metadata": {},
    "name": "itemMetadataQuery",
    "operationKind": "query",
    "text": "query itemMetadataQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    title\n    heroImage {\n      image: large {\n        webp {\n          url\n        }\n      }\n    }\n    heroImageMetadata {\n      alt\n    }\n    thumbnail {\n      image: large {\n        webp {\n          url\n        }\n      }\n    }\n    thumbnailMetadata {\n      alt\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n    abstract: schemaProperty(fullPath: \"abstract\") {\n      __typename\n      ... on FullTextProperty {\n        fullText {\n          content\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "44bf5e024426a18e5f9a031e1fa72279";

export default node;
