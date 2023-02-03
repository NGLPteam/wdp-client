/**
 * @generated SignedSource<<c36d90aacede8e2fb7682cdfc53c8f55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorLayoutFragment$data = {
  readonly __typename: "OrganizationContributor";
  readonly legalName: string | null;
  readonly slug: String;
  readonly " $fragmentType": "ContributorLayoutFragment";
} | {
  readonly __typename: "PersonContributor";
  readonly familyName: string | null;
  readonly givenName: string | null;
  readonly " $fragmentType": "ContributorLayoutFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ContributorLayoutFragment";
};
export type ContributorLayoutFragment$key = {
  readonly " $data"?: ContributorLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorLayoutFragment">;
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

(node as any).hash = "b76a4ba0e2cf7b59772be71339028909";

export default node;
