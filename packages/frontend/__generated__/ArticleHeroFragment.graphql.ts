/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type ArticleHeroFragment = {
    readonly slug: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly summary: string | null;
    readonly visibility: EntityVisibility;
    readonly currentlyHidden: boolean;
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly contributions: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
    };
    readonly pdfVersion: {
        readonly asset?: {
            readonly " $fragmentRefs": FragmentRefs<"AssetDownloadButtonFragment">;
        } | null | undefined;
    } | null;
    readonly journal: {
        readonly " $fragmentRefs": FragmentRefs<"PeerReviewedFragment" | "PreprintVersionFragment" | "OpenAccessFragment" | "CCLicenseFragment">;
    } | null;
    readonly abstract: {
        readonly " $fragmentRefs": FragmentRefs<"FullTextFragment">;
    } | null;
    readonly entityViews: {
        readonly " $fragmentRefs": FragmentRefs<"ViewCountFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"DOIFragment" | "CCLicenseFragment" | "PeerReviewedFragment" | "OpenAccessFragment">;
    readonly " $refType": "ArticleHeroFragment";
};
export type ArticleHeroFragment$data = ArticleHeroFragment;
export type ArticleHeroFragment$key = {
    readonly " $data"?: ArticleHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleHeroFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "PeerReviewedFragment"
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "OpenAccessFragment"
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "CCLicenseFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleHeroFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibility",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentlyHidden",
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
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionConnection",
      "kind": "LinkedField",
      "name": "contributions",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorsListFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "pdfVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "pdf_version"
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
              "name": "asset",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AssetDownloadButtonFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "AssetProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
    },
    {
      "alias": "journal",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PreprintVersionFragment"
        },
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
    },
    {
      "alias": "abstract",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "abstract"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FullTextFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"abstract\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AnalyticsEventCountSummary",
      "kind": "LinkedField",
      "name": "entityViews",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ViewCountFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
    },
    (v2/*: any*/),
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '77884f33b29affe8b30d744a5723c9fd';
export default node;
