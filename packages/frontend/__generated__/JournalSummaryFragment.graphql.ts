/**
 * @generated SignedSource<<3a9a7e11ee16834129636c58de26639b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JournalSummaryFragment$data = {
  readonly __typename: "Collection";
  readonly cover: {
    readonly storage: AttachmentStorage | null;
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
  };
  readonly id: string;
  readonly issues: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly slug: String;
  readonly subtitle: string | null;
  readonly summary: string | null;
  readonly title: string;
  readonly updatedAt: String;
  readonly " $fragmentType": "JournalSummaryFragment";
};
export type JournalSummaryFragment$key = {
  readonly " $data"?: JournalSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalSummaryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalSummaryFragment",
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
      "name": "updatedAt",
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
      "alias": "issues",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": [
            "nglp:journal_issue"
          ]
        },
        {
          "kind": "Literal",
          "name": "scope",
          "value": "COLLECTION"
        }
      ],
      "concreteType": "EntityDescendantConnection",
      "kind": "LinkedField",
      "name": "descendants",
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
      "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "dbd31231f3d56e4f8e86a95670e6d20d";

export default node;
