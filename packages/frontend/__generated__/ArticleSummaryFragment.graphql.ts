/**
 * @generated SignedSource<<ad4fddab51e6a4cc6fbf7f39f72d496b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ArticleSummaryFragment$data = {
  readonly __typename: "Item";
  readonly contributions: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  };
  readonly journal?: {
    readonly title?: string;
  } | null | undefined;
  readonly published: {
    readonly value: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly slug: string;
  readonly subtitle: string | null | undefined;
  readonly summary: string | null | undefined;
  readonly thumbnail: {
    readonly storage: AttachmentStorage | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"SquareThumbnailFragment">;
  };
  readonly title: string;
  readonly " $fragmentType": "ArticleSummaryFragment";
};
export type ArticleSummaryFragment$key = {
  readonly " $data"?: ArticleSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSummaryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showJournal"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSummaryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
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
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "thumbnail",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "SquareThumbnailFragment"
        }
      ],
      "storageKey": null
    },
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
      "name": "summary",
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
      "condition": "showJournal",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
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
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/)
              ],
              "type": "Collection",
              "abstractKey": null
            }
          ],
          "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
        }
      ]
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();

(node as any).hash = "9f83c37a0b4b8ef092d16e1ebddc1dd8";

export default node;
