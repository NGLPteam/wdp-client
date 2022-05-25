/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugItemsPageQueryVariables = {
    itemSlug: string;
};
export type SlugItemsPageQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment" | "ItemSlugRedirectFragment">;
    } | null;
};
export type SlugItemsPageQuery = {
    readonly response: SlugItemsPageQueryResponse;
    readonly variables: SlugItemsPageQueryVariables;
};



/*
query SlugItemsPageQuery(
  $itemSlug: Slug!
) {
  item(slug: $itemSlug) {
    ...ItemLayoutQueryFragment
    ...ItemSlugRedirectFragment
    id
  }
}

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment ItemLayoutFragment on Item {
  title
  slug
  id
  ...useBreadcrumbsFragment
  ...useChildRouteLinksFragment
}

fragment ItemLayoutQueryFragment on Item {
  ...ItemLayoutFragment
  ...AuthContextFragment
}

fragment ItemSlugRedirectFragment on Item {
  slug
  items {
    pageInfo {
      totalCount
    }
  }
}

fragment useBreadcrumbsFragment on Entity {
  __isEntity: __typename
  __typename
  title
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
}

fragment useChildRouteLinksFragment on Entity {
  __isEntity: __typename
  allowedActions
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugItemsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemLayoutQueryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemSlugRedirectFragment"
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
    "name": "SlugItemsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
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
                    "name": "totalCount",
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
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "allowedActions",
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
    "cacheID": "09a2305c7d26536afb95e30e387979a3",
    "id": null,
    "metadata": {},
    "name": "SlugItemsPageQuery",
    "operationKind": "query",
    "text": "query SlugItemsPageQuery(\n  $itemSlug: Slug!\n) {\n  item(slug: $itemSlug) {\n    ...ItemLayoutQueryFragment\n    ...ItemSlugRedirectFragment\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment ItemLayoutFragment on Item {\n  title\n  slug\n  id\n  ...useBreadcrumbsFragment\n  ...useChildRouteLinksFragment\n}\n\nfragment ItemLayoutQueryFragment on Item {\n  ...ItemLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment ItemSlugRedirectFragment on Item {\n  slug\n  items {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n"
  }
};
})();
(node as any).hash = '9870ce8f0171538245e5bf3849fc07d3';
export default node;
