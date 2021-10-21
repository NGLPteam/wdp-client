/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type linksManageCollectionsPagesQueryVariables = {
    collectionSlug: string;
};
export type linksManageCollectionsPagesQueryResponse = {
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutQueryFragment" | "EntityLinksListFragment">;
    } | null;
};
export type linksManageCollectionsPagesQuery = {
    readonly response: linksManageCollectionsPagesQueryResponse;
    readonly variables: linksManageCollectionsPagesQueryVariables;
};



/*
query linksManageCollectionsPagesQuery(
  $collectionSlug: Slug!
) {
  collection(slug: $collectionSlug) {
    ...CollectionLayoutQueryFragment
    ...EntityLinksListFragment
    id
  }
}

fragment CollectionLayoutFragment on Collection {
  title
  slug
  ...useBreadcrumbsFragment
}

fragment CollectionLayoutQueryFragment on Collection {
  ...CollectionLayoutFragment
}

fragment EntityLinksListDataFragment on EntityLinkConnection {
  nodes {
    id
    slug
    operator
    target {
      __typename
      ... on Item {
        slug
        title
        schemaDefinition {
          name
          kind
          id
        }
      }
      ... on Collection {
        slug
        title
        schemaDefinition {
          name
          kind
          id
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
  ...ModelListPageFragment
}

fragment EntityLinksListFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Item {
    slug
    links {
      ...EntityLinksListDataFragment
    }
  }
  ... on Collection {
    slug
    links {
      ...EntityLinksListDataFragment
    }
  }
}

fragment ModelListPageFragment on Paginated {
  __isPaginated: __typename
  ...ModelPageCountActionsFragment
  ...ModelPaginationFragment
}

fragment ModelPageCountActionsFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
    perPage
    hasNextPage
    hasPreviousPage
    totalCount
  }
}

fragment ModelPaginationFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
  }
}

fragment useBreadcrumbsFragment on Entity {
  __isEntity: __typename
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
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
},
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v6 = [
  (v3/*: any*/),
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "SchemaDefinition",
    "kind": "LinkedField",
    "name": "schemaDefinition",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      (v5/*: any*/),
      (v4/*: any*/)
    ],
    "storageKey": null
  }
],
v7 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntityLinkConnection",
    "kind": "LinkedField",
    "name": "links",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EntityLink",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "operator",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "target",
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
                "selections": (v6/*: any*/),
                "type": "Item",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v6/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "linksManageCollectionsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionLayoutQueryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityLinksListFragment"
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
    "name": "linksManageCollectionsPagesQuery",
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
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityBreadcrumb",
                "kind": "LinkedField",
                "name": "breadcrumbs",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "depth",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "label",
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": (v7/*: any*/),
                "type": "Item",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v7/*: any*/),
                "type": "Collection",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c08c9f2d77cf2168a0eec741e9f135ae",
    "id": null,
    "metadata": {},
    "name": "linksManageCollectionsPagesQuery",
    "operationKind": "query",
    "text": "query linksManageCollectionsPagesQuery(\n  $collectionSlug: Slug!\n) {\n  collection(slug: $collectionSlug) {\n    ...CollectionLayoutQueryFragment\n    ...EntityLinksListFragment\n    id\n  }\n}\n\nfragment CollectionLayoutFragment on Collection {\n  title\n  slug\n  ...useBreadcrumbsFragment\n}\n\nfragment CollectionLayoutQueryFragment on Collection {\n  ...CollectionLayoutFragment\n}\n\nfragment EntityLinksListDataFragment on EntityLinkConnection {\n  nodes {\n    id\n    slug\n    operator\n    target {\n      __typename\n      ... on Item {\n        slug\n        title\n        schemaDefinition {\n          name\n          kind\n          id\n        }\n      }\n      ... on Collection {\n        slug\n        title\n        schemaDefinition {\n          name\n          kind\n          id\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment EntityLinksListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    links {\n      ...EntityLinksListDataFragment\n    }\n  }\n  ... on Collection {\n    slug\n    links {\n      ...EntityLinksListDataFragment\n    }\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3f3b8eabe4f4cd8fd3583a992ef9ffe0';
export default node;
