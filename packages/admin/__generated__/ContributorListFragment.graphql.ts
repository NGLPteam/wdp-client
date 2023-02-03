/**
 * @generated SignedSource<<3ca1291a6b0a9a97589c0fe6bf746972>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly __typename: string;
    readonly createdAt?: String;
    readonly familyName?: string | null;
    readonly givenName?: string | null;
    readonly id?: string;
    readonly legalName?: string | null;
    readonly slug?: String;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorAffiliationColumnFragment" | "ContributorContributionsColumnFragment" | "ContributorNameColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "ContributorListFragment";
};
export type ContributorListFragment$key = {
  readonly " $data"?: ContributorListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v3 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributorNameColumnFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "legalName",
              "storageKey": null
            },
            (v2/*: any*/),
            (v3/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
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
            },
            (v2/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        },
        (v3/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorAffiliationColumnFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorContributionsColumnFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnyContributorConnection",
  "abstractKey": null
};
})();

(node as any).hash = "88a84a69e8cbd5fbad2bb624810768b5";

export default node;
