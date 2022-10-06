/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdatePageInput = {
    pageId: string;
    title: string;
    slug: string;
    position?: number | null | undefined;
    body: string;
    heroImage?: UploadedFileInput | null | undefined;
    heroImageMetadata?: ImageMetadataInput | null | undefined;
    clearHeroImage?: boolean | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type UploadedFileInput = {
    id: unknown;
    storage?: UploadStorage | null | undefined;
    metadata?: UploadedFileMetadataInput | null | undefined;
};
export type UploadedFileMetadataInput = {
    alt?: string | null | undefined;
    filename?: string | null | undefined;
    mimeType?: string | null | undefined;
};
export type ImageMetadataInput = {
    alt?: string | null | undefined;
};
export type usePagePositionMutationVariables = {
    input: UpdatePageInput;
};
export type usePagePositionMutationResponse = {
    readonly updatePage: {
        readonly page: {
            readonly " $fragmentRefs": FragmentRefs<"usePagePositionFragment">;
        } | null;
    } | null;
};
export type usePagePositionMutation = {
    readonly response: usePagePositionMutationResponse;
    readonly variables: usePagePositionMutationVariables;
};



/*
mutation usePagePositionMutation(
  $input: UpdatePageInput!
) {
  updatePage(input: $input) {
    page {
      ...usePagePositionFragment
      id
    }
  }
}

fragment usePagePositionFragment on Page {
  pageId: id
  title
  slug
  body
  position
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
  "alias": "pageId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "usePagePositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePagePayload",
        "kind": "LinkedField",
        "name": "updatePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": [
              {
                "kind": "InlineDataFragmentSpread",
                "name": "usePagePositionFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ],
            "storageKey": null
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
    "name": "usePagePositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePagePayload",
        "kind": "LinkedField",
        "name": "updatePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
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
                "kind": "ScalarField",
                "name": "id",
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
    "cacheID": "a29622ae496091a41dc562d8c3741fee",
    "id": null,
    "metadata": {},
    "name": "usePagePositionMutation",
    "operationKind": "mutation",
    "text": "mutation usePagePositionMutation(\n  $input: UpdatePageInput!\n) {\n  updatePage(input: $input) {\n    page {\n      ...usePagePositionFragment\n      id\n    }\n  }\n}\n\nfragment usePagePositionFragment on Page {\n  pageId: id\n  title\n  slug\n  body\n  position\n}\n"
  }
};
})();
(node as any).hash = '931308b9d6ad2e67468e3f2c340bbc89';
export default node;
