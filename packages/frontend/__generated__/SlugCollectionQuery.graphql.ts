/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugCollectionQueryVariables = {
    slug: string;
};
export type SlugCollectionQueryResponse = {
    readonly collection: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment" | "CommunityChildLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityHeroFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutAppFragment">;
};
export type SlugCollectionQuery = {
    readonly response: SlugCollectionQueryResponse;
    readonly variables: SlugCollectionQueryVariables;
};



/*
query SlugCollectionQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
    ...EntityHeroFragment
    community {
      ...CommunityHeroFragment
      ...CommunityChildLayoutFragment
      id
    }
    id
  }
  ...CommunityChildLayoutAppFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
  ...AppFooterFragment
}

fragment AppFooterFragment on Query {
  ...InstallationNameFragment
}

fragment AppHeaderFragment on Query {
  ...InstallationNameFragment
}

fragment CommunityChildLayoutAppFragment on Query {
  ...CommunityCondensedNavFragment
  ...AppBodyFragment
}

fragment CommunityChildLayoutFragment on Community {
  ...CommunityNameFragment
}

fragment CommunityCondensedNavFragment on Query {
  ...InstallationNameFragment
}

fragment CommunityHeroFragment on Community {
  title
}

fragment CommunityNameFragment on Community {
  title
  slug
}

fragment CommunityPickerFragment on Query {
  communities {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}

fragment EntityHeroFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    title
  }
  ... on Community {
    title
  }
  ... on Item {
    title
  }
}

fragment InstallationNameFragment on Query {
  ...CommunityPickerFragment
}
*/

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
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugCollectionQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityHeroFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityChildLayoutFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityHeroFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CommunityChildLayoutAppFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugCollectionQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Community",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/)
                ],
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
    "cacheID": "5f6819e7682cd700bd2232b6dd7f5c11",
    "id": null,
    "metadata": {},
    "name": "SlugCollectionQuery",
    "operationKind": "query",
    "text": "query SlugCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...EntityHeroFragment\n    community {\n      ...CommunityHeroFragment\n      ...CommunityChildLayoutFragment\n      id\n    }\n    id\n  }\n  ...CommunityChildLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment CommunityChildLayoutAppFragment on Query {\n  ...CommunityCondensedNavFragment\n  ...AppBodyFragment\n}\n\nfragment CommunityChildLayoutFragment on Community {\n  ...CommunityNameFragment\n}\n\nfragment CommunityCondensedNavFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment CommunityHeroFragment on Community {\n  title\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n  }\n  ... on Community {\n    title\n  }\n  ... on Item {\n    title\n  }\n}\n\nfragment InstallationNameFragment on Query {\n  ...CommunityPickerFragment\n}\n"
  }
};
})();
(node as any).hash = 'a62f59ba7e2168f478ec0301220eba5f';
export default node;
