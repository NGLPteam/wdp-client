/**
 * @generated SignedSource<<b9be37313112da3c9ea630414f55854b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageContributorDetailQuery$variables = {
  page?: number | null | undefined;
  slug: string;
};
export type pageContributorDetailQuery$data = {
  readonly contributor: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorDetailFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyFragment">;
};
export type pageContributorDetailQuery = {
  response: pageContributorDetailQuery$data;
  variables: pageContributorDetailQuery$variables;
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
  "name": "__typename",
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
  "concreteType": "ControlledVocabularyItem",
  "kind": "LinkedField",
  "name": "roles",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v10 = [
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": (v10/*: any*/),
    "storageKey": null
  }
],
v12 = {
  "alias": "blur",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageDerivative",
      "kind": "LinkedField",
      "name": "webp",
      "plural": false,
      "selections": [
        (v9/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v14 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "summary",
    "storageKey": null
  }
],
v15 = [
  {
    "kind": "InlineFragment",
    "selections": [
      (v3/*: any*/),
      (v6/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "subtitle",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageAttachment",
        "kind": "LinkedField",
        "name": "thumbnail",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "alias": "thumb",
            "args": null,
            "concreteType": "ImageSize",
            "kind": "LinkedField",
            "name": "medium",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "VariablePrecisionDate",
            "kind": "LinkedField",
            "name": "published",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "precision",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "ReferencesGlobalEntityDates",
        "abstractKey": "__isReferencesGlobalEntityDates"
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v13/*: any*/)
        ],
        "type": "Sluggable",
        "abstractKey": "__isSluggable"
      },
      {
        "kind": "InlineFragment",
        "selections": (v14/*: any*/),
        "type": "Item",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v14/*: any*/),
        "type": "Collection",
        "abstractKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  },
  (v4/*: any*/)
],
v16 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v18 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "POSITION_ASCENDING"
  }
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
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
    "name": "pageContributorDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorDetailFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppBodyFragment"
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
    "name": "pageContributorDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bio",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "orcid",
                "storageKey": null
              },
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
                    "value": 25
                  }
                ],
                "concreteType": "ContributorAttributionConnection",
                "kind": "LinkedField",
                "name": "attributions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": "entity",
                            "args": null,
                            "concreteType": "Item",
                            "kind": "LinkedField",
                            "name": "item",
                            "plural": false,
                            "selections": (v15/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "ContributorItemAttribution",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": "entity",
                            "args": null,
                            "concreteType": "Collection",
                            "kind": "LinkedField",
                            "name": "collection",
                            "plural": false,
                            "selections": (v15/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "ContributorCollectionAttribution",
                        "abstractKey": null
                      },
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isAnyContributorAttribution"
                      },
                      (v16/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/),
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
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "small",
                    "plural": false,
                    "selections": (v11/*: any*/),
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributorLink",
                "kind": "LinkedField",
                "name": "links",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "familyName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "givenName",
                        "storageKey": null
                      }
                    ],
                    "type": "PersonContributor",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "legalName",
                        "storageKey": null
                      }
                    ],
                    "type": "OrganizationContributor",
                    "abstractKey": null
                  }
                ],
                "type": "AnyContributor",
                "abstractKey": "__isAnyContributor"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "affiliation",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "type": "PersonContributor",
                "abstractKey": null
              }
            ],
            "type": "Contributor",
            "abstractKey": "__isContributor"
          },
          (v16/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v18/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
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
              (v17/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteSettings",
            "kind": "LinkedField",
            "name": "site",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logoMode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "installationName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteLogoAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v7/*: any*/),
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
                    "name": "originalFilename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/)
                    ],
                    "type": "Image",
                    "abstractKey": "__isImage"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "sansText",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "size",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageDerivative",
                    "kind": "LinkedField",
                    "name": "webp",
                    "plural": false,
                    "selections": [
                      (v19/*: any*/),
                      (v20/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v10/*: any*/),
                        "type": "Image",
                        "abstractKey": "__isImage"
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
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "pickerCommunities",
        "args": (v18/*: any*/),
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
                  (v13/*: any*/),
                  (v6/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      }
    ]
  },
  "params": {
    "cacheID": "9144abb3903c479130e9f2c89dd43d82",
    "id": null,
    "metadata": {},
    "name": "pageContributorDetailQuery",
    "operationKind": "query",
    "text": "query pageContributorDetailQuery(\n  $slug: Slug!\n  $page: Int\n) {\n  contributor(slug: $slug) {\n    __typename\n    ...ContributorDetailFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...AppBodyFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  communities(order: POSITION_ASCENDING) {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderFragment on Query {\n  communities(order: POSITION_ASCENDING) {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    site {\n      logoMode\n    }\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment CommunityPickerFragment on Query {\n  pickerCommunities: communities(order: POSITION_ASCENDING) {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContributionSummaryEntityFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Item {\n    summary\n  }\n  ... on Collection {\n    summary\n  }\n}\n\nfragment ContributionSummaryFragment on AnyContributorAttribution {\n  __isAnyContributorAttribution: __typename\n  ... on ContributorItemAttribution {\n    roles {\n      identifier\n      label\n      id\n    }\n    entity: item {\n      ...ContributionSummaryEntityFragment\n      id\n    }\n  }\n  ... on ContributorCollectionAttribution {\n    roles {\n      identifier\n      label\n      id\n    }\n    entity: collection {\n      ...ContributionSummaryEntityFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n  blur: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributorDetailFragment on Contributor {\n  __isContributor: __typename\n  ...ContributorNameFragment\n  bio\n  orcid\n  attributions(page: $page, perPage: 25) {\n    nodes {\n      __typename\n      ... on ContributorItemAttribution {\n        id\n      }\n      ... on ContributorCollectionAttribution {\n        id\n      }\n      ...ContributionSummaryFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    pageInfo {\n      totalCount\n      ...BrowseListLayoutFragment\n    }\n  }\n  image {\n    storage\n    ...ContributorAvatarFragment\n  }\n  links {\n    title\n    url\n  }\n  ... on PersonContributor {\n    affiliation\n    title\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment InstallationNameFragment on GlobalConfiguration {\n  site {\n    installationName\n    logoMode\n  }\n  logo {\n    storage\n    original {\n      originalFilename\n      ...ImageFragment\n    }\n    sansText {\n      size\n      webp {\n        width\n        height\n        ...ImageFragment\n      }\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n  blur: thumb {\n    webp {\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c86792037a6dace09915bb949029e5f5";

export default node;
