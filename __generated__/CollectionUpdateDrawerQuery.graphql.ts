/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateDrawerQueryVariables = {
    collectionSlug: string;
};
export type CollectionUpdateDrawerQueryResponse = {
    readonly collection: {
        readonly title: string | null;
        readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFragment">;
    } | null;
};
export type CollectionUpdateDrawerQuery = {
    readonly response: CollectionUpdateDrawerQueryResponse;
    readonly variables: CollectionUpdateDrawerQueryVariables;
};



/*
query CollectionUpdateDrawerQuery(
  $collectionSlug: Slug!
) {
  collection(slug: $collectionSlug) {
    title
    ...CollectionUpdateFormFragment
    id
  }
}

fragment CollectionUpdateFormFieldsFragment on Collection {
  title
  visibility
  summary
  visibleAfterAt
  visibleUntilAt
  thumbnail {
    thumb {
      png {
        alt
        url
      }
    }
  }
}

fragment CollectionUpdateFormFragment on Collection {
  collectionId: id
  ...CollectionUpdateFormFieldsFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collectionSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionUpdateDrawerQuery",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionUpdateFormFragment"
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
    "name": "CollectionUpdateDrawerQuery",
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
          {
            "alias": "collectionId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibility",
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
            "kind": "ScalarField",
            "name": "visibleAfterAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibleUntilAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetPreview",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PreviewImageMap",
                "kind": "LinkedField",
                "name": "thumb",
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
                        "name": "alt",
                        "storageKey": null
                      },
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
    "cacheID": "6aa9d67b24f45e22d8a7058b53cdf0f9",
    "id": null,
    "metadata": {},
    "name": "CollectionUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionUpdateDrawerQuery(\n  $collectionSlug: Slug!\n) {\n  collection(slug: $collectionSlug) {\n    title\n    ...CollectionUpdateFormFragment\n    id\n  }\n}\n\nfragment CollectionUpdateFormFieldsFragment on Collection {\n  title\n  visibility\n  summary\n  visibleAfterAt\n  visibleUntilAt\n  thumbnail {\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n}\n\nfragment CollectionUpdateFormFragment on Collection {\n  collectionId: id\n  ...CollectionUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = 'ade70650536d0407f9722c69b5410115';
export default node;
