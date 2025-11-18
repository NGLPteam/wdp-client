/**
 * @generated SignedSource<<6d6d9e23dcd56f99484ce7b059ad9d61>>
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
  readonly legalName: string | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "ContributorLayoutFragment";
} | {
  readonly __typename: "PersonContributor";
  readonly familyName: string | null | undefined;
  readonly givenName: string | null | undefined;
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
  "type": "Contributor",
  "abstractKey": "__isContributor"
};

(node as any).hash = "e8e8a6a8f63929ba8d41f82def482c48";

export default node;
