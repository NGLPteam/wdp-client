/**
 * @generated SignedSource<<f4b2b3e83dafc98df8f059b638381a35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DissertationSummaryFragment$data = {
  readonly __typename: "Item";
  readonly contributions: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  };
  readonly cover: {
    readonly storage: AttachmentStorage | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
  };
  readonly id: string;
  readonly published: {
    readonly value: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly slug: string;
  readonly subtitle: string | null | undefined;
  readonly summary: string | null | undefined;
  readonly title: string;
  readonly " $fragmentType": "DissertationSummaryFragment";
};
export type DissertationSummaryFragment$key = {
  readonly " $data"?: DissertationSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DissertationSummaryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DissertationSummaryFragment",
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
      "name": "id",
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
      "alias": "cover",
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
          "name": "CoverImageFragment"
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
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "61c7d9bb5a663e26e524413d5a2706e6";

export default node;
