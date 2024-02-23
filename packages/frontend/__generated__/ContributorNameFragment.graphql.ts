/**
 * @generated SignedSource<<9272f55d2bac9be1fd79ad82c32d3da4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorNameFragment$data = {
  readonly __typename: "OrganizationContributor";
  readonly legalName: string | null | undefined;
  readonly " $fragmentType": "ContributorNameFragment";
} | {
  readonly __typename: "PersonContributor";
  readonly familyName: string | null | undefined;
  readonly givenName: string | null | undefined;
  readonly " $fragmentType": "ContributorNameFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ContributorNameFragment";
};
export type ContributorNameFragment$key = {
  readonly " $data"?: ContributorNameFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorNameFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "familyName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "givenName",
          "storageKey": null
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
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
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
})();

(node as any).hash = "0de2e36a300b2d52b6920c9bd9dcd9e2";

export default node;
