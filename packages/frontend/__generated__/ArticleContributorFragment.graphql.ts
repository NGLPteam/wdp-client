/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleContributorFragment = {
    readonly nodes: ReadonlyArray<{
        readonly role: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ContributionAuthorBlockFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ContributionsBlockFragment">;
    readonly " $refType": "ArticleContributorFragment";
};
export type ArticleContributorFragment$data = ArticleContributorFragment;
export type ArticleContributorFragment$key = {
    readonly " $data"?: ArticleContributorFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleContributorFragment">;
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
(node as any).hash = '0b09ac7781af6e6279da104e540f44c5';
export default node;
