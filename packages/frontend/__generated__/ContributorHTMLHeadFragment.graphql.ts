/**
 * @generated SignedSource<<3450c27a29d6d11e43fd8e62cc4ee859>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorHTMLHeadFragment$data = {
  readonly __typename: "OrganizationContributor";
  readonly legalName: string | null | undefined;
  readonly " $fragmentType": "ContributorHTMLHeadFragment";
} | {
  readonly __typename: "PersonContributor";
  readonly familyName: string | null | undefined;
  readonly givenName: string | null | undefined;
  readonly " $fragmentType": "ContributorHTMLHeadFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ContributorHTMLHeadFragment";
};
export type ContributorHTMLHeadFragment$key = {
  readonly " $data"?: ContributorHTMLHeadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorHTMLHeadFragment">;
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
  "name": "ContributorHTMLHeadFragment",
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
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
})();

(node as any).hash = "69ded73bf859d26023ad2193c7bef3c2";

export default node;
