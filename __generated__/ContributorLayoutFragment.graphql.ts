/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorLayoutFragment = {
    readonly __typename: "OrganizationContributor";
    readonly slug: string;
    readonly name: string | null;
    readonly " $refType": "ContributorLayoutFragment";
} | {
    readonly __typename: "PersonContributor";
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly " $refType": "ContributorLayoutFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "ContributorLayoutFragment";
};
export type ContributorLayoutFragment$data = ContributorLayoutFragment;
export type ContributorLayoutFragment$key = {
    readonly " $data"?: ContributorLayoutFragment$data;
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
          "alias": "name",
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
          "alias": "firstName",
          "args": null,
          "kind": "ScalarField",
          "name": "givenName",
          "storageKey": null
        },
        {
          "alias": "lastName",
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
(node as any).hash = '488d2d99bb9377a0ea2ad0ba9b51627d';
export default node;
