/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ArticleSummaryFragment = {
    readonly __typename: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly thumbnail: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"SquareThumbnailFragment">;
    };
    readonly published?: {
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    } | undefined;
    readonly slug?: string | undefined;
    readonly summary?: string | null | undefined;
    readonly contributions?: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
    } | undefined;
    readonly " $refType": "ArticleSummaryFragment";
};
export type ArticleSummaryFragment$data = ArticleSummaryFragment;
export type ArticleSummaryFragment$key = {
    readonly " $data"?: ArticleSummaryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleSummaryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "PrecisionDateFragment"
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    },
    {
      "kind": "InlineFragment",
      "selections": [
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
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'd0206dfb45f49cc3615f41dc69e1eb20';
export default node;
