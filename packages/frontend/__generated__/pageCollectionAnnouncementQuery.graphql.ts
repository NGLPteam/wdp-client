/**
 * @generated SignedSource<<169dd5b9066194efc905175acd4d9790>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageCollectionAnnouncementQuery$variables = {
  announcementSlug: string;
  slug: string;
};
export type pageCollectionAnnouncementQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFactoryFragment">;
  } | null | undefined;
};
export type pageCollectionAnnouncementQuery = {
  response: pageCollectionAnnouncementQuery$data;
  variables: pageCollectionAnnouncementQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "announcementSlug"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "announcementSlug"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageCollectionAnnouncementQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "EntityAnnouncementLayoutFactoryFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": (v3/*: any*/),
                        "concreteType": "Announcement",
                        "kind": "LinkedField",
                        "name": "announcement",
                        "plural": false,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "EntityAnnouncementLayoutFragment"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Collection",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              }
            ],
            "args": null,
            "argumentDefinitions": [
              {
                "kind": "RootArgument",
                "name": "announcementSlug"
              }
            ]
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageCollectionAnnouncementQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "concreteType": "Announcement",
                    "kind": "LinkedField",
                    "name": "announcement",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "header",
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
                        "name": "publishedOn",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "updatedAt",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Collection",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dfc7160f9795f0203cf0f45c8c0489fa",
    "id": null,
    "metadata": {},
    "name": "pageCollectionAnnouncementQuery",
    "operationKind": "query",
    "text": "query pageCollectionAnnouncementQuery(\n  $slug: Slug!\n  $announcementSlug: Slug!\n) {\n  collection(slug: $slug) {\n    ...EntityAnnouncementLayoutFactoryFragment\n    id\n  }\n}\n\nfragment EntityAnnouncementLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    announcement(slug: $announcementSlug) {\n      ...EntityAnnouncementLayoutFragment\n      id\n    }\n  }\n}\n\nfragment EntityAnnouncementLayoutFragment on Announcement {\n  header\n  body\n  publishedOn\n  updatedAt\n}\n"
  }
};
})();

(node as any).hash = "8f37c1f0fcd5d5a594c28a30e62b3dbd";

export default node;
