/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorLayoutFragment = {
    readonly __typename: "OrganizationContributor";
    readonly slug: string;
    readonly legalName: string | null;
    readonly " $refType": "ContributorLayoutFragment";
} | {
    readonly __typename: "PersonContributor";
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly " $refType": "ContributorLayoutFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "ContributorLayoutFragment";
};
export type ContributorLayoutFragment$data = ContributorLayoutFragment;
export type ContributorLayoutFragment$key = {
    readonly " $data"?: ContributorLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "legalName",
          "storageKey": null
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "givenName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "familyName",
          "storageKey": null
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
(node as any).hash = 'b76a4ba0e2cf7b59772be71339028909';
export default node;
