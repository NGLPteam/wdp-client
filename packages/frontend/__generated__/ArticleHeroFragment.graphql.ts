/**
 * @generated SignedSource<<9ec34e5bb956415cf2f5201af638c321>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ArticleHeroFragment$data = {
  readonly abstract: {
    readonly " $fragmentSpreads": FragmentRefs<"FullTextFragment">;
  } | null;
  readonly assetDownloads: {
    readonly " $fragmentSpreads": FragmentRefs<"DownloadCountFragment">;
  };
  readonly contributions: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  };
  readonly currentlyHidden: boolean;
  readonly entityViews: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewCountFragment">;
  };
  readonly journal: {
    readonly " $fragmentSpreads": FragmentRefs<"CCLicenseFragment" | "OpenAccessFragment" | "PeerReviewedFragment" | "PreprintVersionFragment">;
  } | null;
  readonly pdfVersion: {
    readonly asset?: {
      readonly " $fragmentSpreads": FragmentRefs<"AssetDownloadButtonFragment">;
    } | null;
  } | null;
  readonly published: {
    readonly value: String | null;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly slug: String;
  readonly subtitle: string | null;
  readonly summary: string | null;
  readonly title: string;
  readonly visibility: EntityVisibility;
  readonly " $fragmentSpreads": FragmentRefs<"CCLicenseFragment" | "DOIFragment" | "OpenAccessFragment" | "PeerReviewedFragment">;
  readonly " $fragmentType": "ArticleHeroFragment";
};
export type ArticleHeroFragment$key = {
  readonly " $data"?: ArticleHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleHeroFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
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
      "alias": null,
      "args": null,
      "concreteType": "AnalyticsEventCountSummary",
      "kind": "LinkedField",
      "name": "assetDownloads",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DownloadCountFragment"
        }
      ],
      "storageKey": null
    },
    (v2/*: any*/),
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "type": "Item",
  "abstractKey": null
};
})();

(node as any).hash = "052141ecb2fb288b2c7db3789144caea";

export default node;
