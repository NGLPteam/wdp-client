/**
 * @generated SignedSource<<ee168726a3c17558fbdb42309a6279cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageTemplatesCollectionAnnouncementQuery$variables = {
  announcementSlug: string;
  slug: string;
};
export type pageTemplatesCollectionAnnouncementQuery$data = {
  readonly collection: {
    readonly announcement: {
      readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type pageTemplatesCollectionAnnouncementQuery = {
  response: pageTemplatesCollectionAnnouncementQuery$data;
  variables: pageTemplatesCollectionAnnouncementQuery$variables;
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
    "name": "pageTemplatesCollectionAnnouncementQuery",
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
    "name": "pageTemplatesCollectionAnnouncementQuery",
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
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4c1fcccc4623ff1cde5b5ae0691d0e72",
    "id": null,
    "metadata": {},
    "name": "pageTemplatesCollectionAnnouncementQuery",
    "operationKind": "query",
    "text": "query pageTemplatesCollectionAnnouncementQuery(\n  $slug: Slug!\n  $announcementSlug: Slug!\n) {\n  collection(slug: $slug) {\n    announcement(slug: $announcementSlug) {\n      ...EntityAnnouncementLayoutFragment\n      id\n    }\n    id\n  }\n}\n\nfragment EntityAnnouncementLayoutFragment on Announcement {\n  header\n  body\n  publishedOn\n  updatedAt\n}\n"
  }
};
})();

(node as any).hash = "78272df42b7e08e09590245716cf24c1";

export default node;
