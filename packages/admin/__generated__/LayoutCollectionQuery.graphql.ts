/**
 * @generated SignedSource<<11edeea590ed06beabdbf93ffc4f0491>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LayoutCollectionQuery$variables = {
  slug: string;
};
export type LayoutCollectionQuery$data = {
  readonly collection: {
    readonly allowedActions: ReadonlyArray<string>;
    readonly " $fragmentSpreads": FragmentRefs<"AuthContextFragment" | "CollectionLayoutFragment" | "CollectionSlugRedirectFragment">;
  } | null | undefined;
};
export type LayoutCollectionQuery = {
  response: LayoutCollectionQuery$data;
  variables: LayoutCollectionQuery$variables;
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
  "name": "allowedActions",
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
v5 = [
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
        "name": "totalCount",
        "storageKey": null
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
    "name": "LayoutCollectionQuery",
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
            "name": "CollectionLayoutFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuthContextFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionSlugRedirectFragment"
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
    "name": "LayoutCollectionQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaVersion",
            "kind": "LinkedField",
            "name": "schemaVersion",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "enforcedChildKinds",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "harvestModificationStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestRecord",
            "kind": "LinkedField",
            "name": "harvestRecords",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "markedForPurge",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kind",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isSluggable"
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "069b7e4812ebe167cd34629e487dc8ea",
    "id": null,
    "metadata": {},
    "name": "LayoutCollectionQuery",
    "operationKind": "query",
    "text": "query LayoutCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    allowedActions\n    ...CollectionLayoutFragment\n    ...AuthContextFragment\n    ...CollectionSlugRedirectFragment\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment CollectionLayoutFragment on Collection {\n  title\n  slug\n  id\n  schemaVersion {\n    enforcedChildKinds\n    id\n  }\n  harvestModificationStatus\n  harvestRecords {\n    slug\n    id\n  }\n  ...ContentHeaderFragment\n  ...useBreadcrumbsFragment\n  ...useChildRouteLinksFragment\n}\n\nfragment CollectionSlugRedirectFragment on Collection {\n  slug\n  collections {\n    pageInfo {\n      totalCount\n    }\n  }\n  items {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment ContentHeaderFragment on Entity {\n  __isEntity: __typename\n  markedForPurge\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n  schemaVersion {\n    enforcedChildKinds\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2aa814728be3703b3d10a63d98706771";

export default node;
