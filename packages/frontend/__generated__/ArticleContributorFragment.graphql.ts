/**
 * @generated SignedSource<<8b806a9570eaaa5d9b1ac26fe47782ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleContributorFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly role: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"ContributionAuthorBlockFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionsBlockFragment">;
  readonly " $fragmentType": "ArticleContributorFragment";
};
export type ArticleContributorFragment$key = {
  readonly " $data"?: ArticleContributorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleContributorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleContributorFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributionAuthorBlockFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributionsBlockFragment"
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};

(node as any).hash = "0b09ac7781af6e6279da104e540f44c5";

export default node;
