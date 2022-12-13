/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PageCommunityQueryVariables = {
    slug: string;
    pageSlug: string;
};
export type PageCommunityQueryResponse = {
    readonly community: {
        readonly page: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityPageLayoutFragment">;
        } | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutQueryFragment">;
};
export type PageCommunityQuery = {
    readonly response: PageCommunityQueryResponse;
    readonly variables: PageCommunityQueryVariables;
};



/*
query PageCommunityQuery(
  $slug: Slug!
  $pageSlug: String!
) {
  community(slug: $slug) {
    page(slug: $pageSlug) {
      ...CommunityPageLayoutFragment
      id
    }
    id
  }
  ...CommunityLayoutQueryFragment_20J5Pl
}

fragment AppBodyCommunityFragment on Community {
  ...AppHeaderCommunityFragment
  ...AppFooterCommunityFragment
}

fragment AppBodyEntityFragment on Entity {
  __isEntity: __typename
  ...AppHeaderEntityFragment
}

fragment AppFooterCommunityFragment on Community {
  slug
  title
  ...CommunityPickerActiveFragment
  ...CommunityNameFragment
}

fragment AppHeaderCommunityFragment on Community {
  ...CommunityPickerActiveFragment
  ...CommunityNavListFragment
  ...CommunityNameFragment
}

fragment AppHeaderEntityFragment on Entity {
  __isEntity: __typename
  ...SearchButtonFragment
}

fragment AppLayoutCommunityFragment on Community {
  ...CommunityNavBarFragment
  ...AppBodyCommunityFragment
}

fragment AppLayoutEntityFragment on Entity {
  __isEntity: __typename
  ...CommunityNavBarEntityFragment
  ...AppBodyEntityFragment
}

fragment CommunityLayoutFragment_20J5Pl on Query {
  community(slug: $slug) {
    slug
    ...AppLayoutCommunityFragment
    ...AppLayoutEntityFragment
    id
  }
}

fragment CommunityLayoutQueryFragment_20J5Pl on Query {
  ...CommunityLayoutFragment_20J5Pl
}

fragment CommunityLogoFragment on ImageAttachment {
  storage
  original {
    url
    width
    height
  }
}

fragment CommunityNameFragment on Community {
  title
  slug
  logo {
    storage
    original {
      width
      height
    }
    ...CommunityLogoFragment
  }
}

fragment CommunityNavBarEntityFragment on Entity {
  __isEntity: __typename
  ...SearchButtonFragment
}

fragment CommunityNavBarFragment on Community {
  ...CommunityNameFragment
  ...CommunityNavListFragment
}

fragment CommunityNavListFragment on Community {
  slug
  schemaRanks {
    slug
    name
    count
    kind
    id
  }
  pages {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}

fragment CommunityPageLayoutFragment on Page {
  title
  body
  heroImage {
    ...HeroImageFragment
  }
  heroImageMetadata {
    ...HeroImageMetadataFragment
  }
}

fragment CommunityPickerActiveFragment on Community {
  title
  slug
}

fragment HeroImageFragment on ImageAttachment {
  image: hero {
    webp {
      url
    }
  }
  placeholder: thumb {
    webp {
      url
    }
  }
}

fragment HeroImageMetadataFragment on ImageMetadata {
  alt
}

fragment SearchButtonFragment on Entity {
  __isEntity: __typename
  ...SearchModalFragment
}

fragment SearchModalFragment on Entity {
  __isEntity: __typename
  __typename
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  title
  breadcrumbs {
    crumb {
      __typename
      ... on Sluggable {
        __isSluggable: __typename
        slug
      }
      ... on Entity {
        __isEntity: __typename
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pageSlug"
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
    "variableName": "pageSlug"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v5/*: any*/)
    ],
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
    "name": "PageCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityPageLayoutFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "CommunityLayoutQueryFragment"
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
    "name": "PageCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "page",
            "plural": false,
            "selections": [
              (v4/*: any*/),
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
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "heroImage",
                "plural": false,
                "selections": [
                  {
                    "alias": "image",
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "hero",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": "placeholder",
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "thumb",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageMetadata",
                "kind": "LinkedField",
                "name": "heroImageMetadata",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "alt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v8/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "storage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
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
                    "name": "height",
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HierarchicalSchemaRank",
            "kind": "LinkedField",
            "name": "schemaRanks",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "count",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageConnection",
            "kind": "LinkedField",
            "name": "pages",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Page",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v4/*: any*/),
                      (v7/*: any*/)
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
            "kind": "InlineFragment",
            "selections": [
              (v9/*: any*/),
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
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "crumb",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v8/*: any*/)
                        ],
                        "type": "Sluggable",
                        "abstractKey": "__isSluggable"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
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
    "cacheID": "9fc9061bd5be6eed28a12dcf626b7eab",
    "id": null,
    "metadata": {},
    "name": "PageCommunityQuery",
    "operationKind": "query",
    "text": "query PageCommunityQuery(\n  $slug: Slug!\n  $pageSlug: String!\n) {\n  community(slug: $slug) {\n    page(slug: $pageSlug) {\n      ...CommunityPageLayoutFragment\n      id\n    }\n    id\n  }\n  ...CommunityLayoutQueryFragment_20J5Pl\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppBodyEntityFragment on Entity {\n  __isEntity: __typename\n  ...AppHeaderEntityFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  slug\n  title\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment AppLayoutEntityFragment on Entity {\n  __isEntity: __typename\n  ...CommunityNavBarEntityFragment\n  ...AppBodyEntityFragment\n}\n\nfragment CommunityLayoutFragment_20J5Pl on Query {\n  community(slug: $slug) {\n    slug\n    ...AppLayoutCommunityFragment\n    ...AppLayoutEntityFragment\n    id\n  }\n}\n\nfragment CommunityLayoutQueryFragment_20J5Pl on Query {\n  ...CommunityLayoutFragment_20J5Pl\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPageLayoutFragment on Page {\n  title\n  body\n  heroImage {\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '67466a3860ada4ff08993522202870d6';
export default node;
