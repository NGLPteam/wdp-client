/**
 * @generated SignedSource<<806df425d5edfb661c315b2bf6ccac5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionContributionListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly collection: {
      readonly slug: String;
      readonly title: string;
    };
    readonly contributor: {
      readonly __typename: string;
      readonly familyName?: string | null;
      readonly givenName?: string | null;
      readonly legalName?: string | null;
      readonly slug?: String;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameColumnFragment">;
    };
    readonly createdAt: String;
    readonly id: string;
    readonly role: string | null;
    readonly slug: String;
    readonly updatedAt: String;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "CollectionContributionListFragment";
};
export type CollectionContributionListFragment$key = {
  readonly " $data"?: CollectionContributionListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionContributionListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionContributionListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
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
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "contributor",
          "plural": false,
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
                (v0/*: any*/),
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
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContributorNameColumnFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
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
  "type": "CollectionContributionConnection",
  "abstractKey": null
};
})();

(node as any).hash = "4fb21f2b3da5a0b99866d14428a97159";

export default node;
