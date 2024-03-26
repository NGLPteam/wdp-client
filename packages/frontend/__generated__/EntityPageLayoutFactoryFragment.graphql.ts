/**
 * @generated SignedSource<<af5d88b70a91b09ef0329bd5e43d03bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFactoryFragment$data = {
  readonly page?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFragment" | "IssuePageLayoutFragment">;
  } | null | undefined;
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFactoryFragment" | "IssueSidebarNavFragment">;
  readonly " $fragmentType": "EntityPageLayoutFactoryFragment";
};
export type EntityPageLayoutFactoryFragment$key = {
  readonly " $data"?: EntityPageLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFactoryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
      "name": "identifier",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "BreadcrumbsBarFragment"
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityNavBarFragment"
},
v3 = {
  "kind": "InlineDataFragmentSpread",
  "name": "EntityLayoutFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v1/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "EntityHeroFragment"
            },
            (v2/*: any*/)
          ],
          "type": "Entity",
          "abstractKey": "__isEntity"
        }
      ],
      "type": "AnyEntity",
      "abstractKey": "__isAnyEntity"
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
},
v4 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v5 = {
  "kind": "InlineDataFragmentSpread",
  "name": "EntityLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v3/*: any*/),
            {
              "kind": "InlineDataFragmentSpread",
              "name": "JournalLayoutFragment",
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "JournalHeroFragment"
                },
                (v2/*: any*/),
                (v1/*: any*/),
                {
                  "alias": "related",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "order",
                      "value": "RECENT"
                    },
                    (v4/*: any*/)
                  ],
                  "concreteType": "CollectionConnection",
                  "kind": "LinkedField",
                  "name": "relatedCollections",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "RelatedJournalsFragment"
                    }
                  ],
                  "storageKey": "relatedCollections(order:\"RECENT\",perPage:4)"
                }
              ],
              "args": null,
              "argumentDefinitions": ([]/*: any*/)
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "IssueLayoutFragment",
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "IssueHeroFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CollectionContributionConnection",
                  "kind": "LinkedField",
                  "name": "contributions",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ContributionsBlockFragment"
                    },
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
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "page",
                      "value": 1
                    },
                    (v4/*: any*/)
                  ],
                  "concreteType": "CollectionConnection",
                  "kind": "LinkedField",
                  "name": "relatedCollections",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "RelatedIssuesFragment"
                    }
                  ],
                  "storageKey": "relatedCollections(page:1,perPage:4)"
                }
              ],
              "args": null,
              "argumentDefinitions": ([]/*: any*/)
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "VolumeLayoutFragment"
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "SeriesLayoutFragment",
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SeriesHeroFragment"
                },
                (v2/*: any*/)
              ],
              "args": null,
              "argumentDefinitions": ([]/*: any*/)
            }
          ],
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v3/*: any*/),
            {
              "kind": "InlineDataFragmentSpread",
              "name": "ArticleLayoutFragment",
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArticleParentHeaderFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArticleHeroFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ArticleTabNavFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ItemConnection",
                  "kind": "LinkedField",
                  "name": "relatedItems",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "RelatedArticlesFragment"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "args": null,
              "argumentDefinitions": ([]/*: any*/)
            }
          ],
          "type": "Item",
          "abstractKey": null
        }
      ],
      "type": "AnyEntity",
      "abstractKey": "__isAnyEntity"
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
},
v6 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "pageSlug"
  }
],
v7 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityPageLayoutFragment"
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "pageSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPageLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueSidebarNavFragment"
        },
        (v5/*: any*/),
        {
          "alias": null,
          "args": (v6/*: any*/),
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
          "plural": false,
          "selections": [
            (v7/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "IssuePageLayoutFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v5/*: any*/),
        {
          "alias": null,
          "args": (v6/*: any*/),
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
          "plural": false,
          "selections": [
            (v7/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "79b29f7ff97d9433c487a7b9d6f09746";

export default node;
