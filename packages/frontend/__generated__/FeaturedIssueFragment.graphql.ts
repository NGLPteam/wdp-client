/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedIssueFragment = {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly slug: string;
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly volume: {
        readonly title?: string | undefined;
    } | null;
    readonly articles: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly ordering: {
        readonly identifier: string;
        readonly children: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly entry: {
                        readonly slug?: string | undefined;
                        readonly " $fragmentRefs": FragmentRefs<"ArticleSummaryFragment">;
                    };
                };
            }>;
            readonly pageInfo: {
                readonly totalCount: number;
            };
        };
    } | null;
    readonly featuredArticles: {
        readonly entities?: ReadonlyArray<{
            readonly slug?: string | undefined;
            readonly " $fragmentRefs": FragmentRefs<"ArticleSummaryFragment">;
        }> | undefined;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"getEntityDisplayNameFragment" | "getEntityDisplayNumberFragment">;
    readonly " $refType": "FeaturedIssueFragment";
};
export type FeaturedIssueFragment$data = FeaturedIssueFragment;
export type FeaturedIssueFragment$key = {
    readonly " $data"?: FeaturedIssueFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedIssueFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = [
  {
    "kind": "InlineFragment",
    "selections": [
      (v0/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  }
],
v3 = {
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
},
v4 = [
  {
    "kind": "InlineFragment",
    "selections": [
      (v1/*: any*/)
    ],
    "type": "Sluggable",
    "abstractKey": "__isSluggable"
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ArticleSummaryFragment"
  }
],
v5 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "volume"
  }
],
v6 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v7 = {
  "alias": "issueNumber",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "number"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"number\")"
},
v8 = {
  "kind": "InlineDataFragmentSpread",
  "name": "getEntityVolumeNumberFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": "volume",
              "args": (v5/*: any*/),
              "concreteType": null,
              "kind": "LinkedField",
              "name": "ancestorByName",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": "number",
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "fullPath",
                          "value": "id"
                        }
                      ],
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "schemaProperty",
                      "plural": false,
                      "selections": (v6/*: any*/),
                      "storageKey": "schemaProperty(fullPath:\"id\")"
                    }
                  ],
                  "type": "Collection",
                  "abstractKey": null
                }
              ],
              "storageKey": "ancestorByName(name:\"volume\")"
            },
            {
              "alias": "volumeNumber",
              "args": [
                {
                  "kind": "Literal",
                  "name": "fullPath",
                  "value": "volume.id"
                }
              ],
              "concreteType": null,
              "kind": "LinkedField",
              "name": "schemaProperty",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": "schemaProperty(fullPath:\"volume.id\")"
            }
          ],
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "type": "AnyEntity",
      "abstractKey": "__isAnyEntity"
    }
  ]
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedIssueFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CoverImageFragment"
        }
      ],
      "storageKey": null
    },
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "volume",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_volume"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
    },
    {
      "alias": "articles",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_article"
        }
      ],
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "items",
      "plural": false,
      "selections": [
        (v3/*: any*/)
      ],
      "storageKey": "items(schema:\"nglp:journal_article\")"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "identifier",
          "value": "articles"
        }
      ],
      "concreteType": "Ordering",
      "kind": "LinkedField",
      "name": "ordering",
      "plural": false,
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
          "args": [
            {
              "kind": "Literal",
              "name": "perPage",
              "value": 3
            }
          ],
          "concreteType": "OrderingEntryConnection",
          "kind": "LinkedField",
          "name": "children",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OrderingEntryEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "OrderingEntry",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "entry",
                      "plural": false,
                      "selections": (v4/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": "children(perPage:3)"
        }
      ],
      "storageKey": "ordering(identifier:\"articles\")"
    },
    {
      "alias": "featuredArticles",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "featured_articles"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "entities",
              "plural": true,
              "selections": (v4/*: any*/),
              "storageKey": null
            }
          ],
          "type": "EntitiesProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "getEntityDisplayNameFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                {
                  "alias": "volume",
                  "args": (v5/*: any*/),
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "ancestorByName",
                  "plural": false,
                  "selections": (v2/*: any*/),
                  "storageKey": "ancestorByName(name:\"volume\")"
                },
                (v7/*: any*/),
                (v8/*: any*/)
              ],
              "type": "Collection",
              "abstractKey": null
            }
          ],
          "type": "AnyEntity",
          "abstractKey": "__isAnyEntity"
        }
      ]
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "getEntityDisplayNumberFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v7/*: any*/),
                (v8/*: any*/)
              ],
              "type": "Collection",
              "abstractKey": null
            }
          ],
          "type": "AnyEntity",
          "abstractKey": "__isAnyEntity"
        }
      ]
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = '7519c59d142a847e2a59eb4f9bc3d932';
export default node;
