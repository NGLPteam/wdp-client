/**
 * @generated SignedSource<<bdd064b13d67e749da42900b587e34f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedJournalFragment$data = {
  readonly id: string;
  readonly issues: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly slug: String;
  readonly subtitle: string | null;
  readonly thumbnail: {
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
  };
  readonly title: string;
  readonly updatedAt: String;
  readonly " $fragmentType": "FeaturedJournalFragment";
};
export type FeaturedJournalFragment$key = {
  readonly " $data"?: FeaturedJournalFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedJournalFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedJournalFragment",
  "selections": [
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
      "name": "updatedAt",
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

(node as any).hash = "90e06960248b6654732fc413977c9583";

export default node;
