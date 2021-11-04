/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UploadStorage = "CACHE" | "%future added value";
export type CreatePageInput = {
    entityId: string;
    title: string;
    slug: string;
    position?: number | null | undefined;
    body: string;
    heroImage?: UploadedFileInput | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type UploadedFileInput = {
    id: unknown;
    storage?: UploadStorage | null | undefined;
    metadata?: UploadedFileMetadataInput | null | undefined;
};
export type UploadedFileMetadataInput = {
    filename?: string | null | undefined;
    mimeType?: string | null | undefined;
};
export type EntityPageAddFormMutationVariables = {
    input: CreatePageInput;
};
export type EntityPageAddFormMutationResponse = {
    readonly createPage: {
        readonly page: {
            readonly id: string;
            readonly title: string;
            readonly slug: string;
            readonly thumbnail: {
                readonly image: {
                    readonly png: {
                        readonly url: string;
                        readonly height: number;
                        readonly width: number;
                        readonly alt: string;
                    } | null;
                };
            } | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type EntityPageAddFormMutation = {
    readonly response: EntityPageAddFormMutationResponse;
    readonly variables: EntityPageAddFormMutationVariables;
};



/*
mutation EntityPageAddFormMutation(
  $input: CreatePageInput!
) {
  createPage(input: $input) {
    page {
      id
      title
      slug
      thumbnail: heroImage {
        image: medium {
          png {
            url
            height
            width
            alt
          }
        }
      }
    }
    ...MutationForm_mutationErrors
  }
}

fragment MutationForm_mutationErrors on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  attributeErrors {
    path
    type
    messages
  }
  globalErrors {
    message
  }
  errors {
    message
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Page",
  "kind": "LinkedField",
  "name": "page",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": "thumbnail",
      "args": null,
      "concreteType": "AssetPreview",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": [
        {
          "alias": "image",
          "args": null,
          "concreteType": "PreviewImageMap",
          "kind": "LinkedField",
          "name": "medium",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PreviewImage",
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
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationAttributeError",
      "kind": "LinkedField",
      "name": "attributeErrors",
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
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messages",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationGlobalError",
      "kind": "LinkedField",
      "name": "globalErrors",
      "plural": true,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v3/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityPageAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePagePayload",
        "kind": "LinkedField",
        "name": "createPage",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v4/*: any*/)
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntityPageAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePagePayload",
        "kind": "LinkedField",
        "name": "createPage",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0fe16815ef8aa28100a44c3450e09d04",
    "id": null,
    "metadata": {},
    "name": "EntityPageAddFormMutation",
    "operationKind": "mutation",
    "text": "mutation EntityPageAddFormMutation(\n  $input: CreatePageInput!\n) {\n  createPage(input: $input) {\n    page {\n      id\n      title\n      slug\n      thumbnail: heroImage {\n        image: medium {\n          png {\n            url\n            height\n            width\n            alt\n          }\n        }\n      }\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '2b17412d4a36777be7fdfdce93f37401';
export default node;
