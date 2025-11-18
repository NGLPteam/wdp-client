/**
 * @generated SignedSource<<cdb5aa61a1d4997f52b91b8af0048ae0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type announcementsManageSlugItemsPagesQuery$variables = {
  page?: number | null | undefined;
  slug: string;
};
export type announcementsManageSlugItemsPagesQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementsListFragment">;
  } | null | undefined;
};
export type announcementsManageSlugItemsPagesQuery = {
  response: announcementsManageSlugItemsPagesQuery$data;
  variables: announcementsManageSlugItemsPagesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Literal",
        "name": "perPage",
        "value": 20
      }
    ],
    "concreteType": "AnnouncementConnection",
    "kind": "LinkedField",
    "name": "announcements",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AnnouncementEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Announcement",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v3/*: any*/),
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
                "name": "publishedOn",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "page",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pageCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "perPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "Paginated",
        "abstractKey": "__isPaginated"
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "announcementsManageSlugItemsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityAnnouncementsListFragment"
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
    "name": "announcementsManageSlugItemsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Community",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cb3ab03366f8d80e1784150bf0eecabd",
    "id": null,
    "metadata": {},
    "name": "announcementsManageSlugItemsPagesQuery",
    "operationKind": "query",
    "text": "query announcementsManageSlugItemsPagesQuery(\n  $slug: Slug!\n  $page: Int\n) {\n  item(slug: $slug) {\n    ...EntityAnnouncementsListFragment\n    id\n  }\n}\n\nfragment EntityAnnouncementsListDataFragment on AnnouncementConnection {\n  edges {\n    node {\n      id\n      slug\n      header\n      publishedOn\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment EntityAnnouncementsListFragment on Entity {\n  __isEntity: __typename\n  ... on Community {\n    slug\n    announcements(page: $page, perPage: 20) {\n      ...EntityAnnouncementsListDataFragment\n    }\n  }\n  ... on Collection {\n    slug\n    announcements(page: $page, perPage: 20) {\n      ...EntityAnnouncementsListDataFragment\n    }\n  }\n  ... on Item {\n    slug\n    announcements(page: $page, perPage: 20) {\n      ...EntityAnnouncementsListDataFragment\n    }\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "1dfc25e209878c2ef3ebd4cbc4dc8abf";

export default node;
