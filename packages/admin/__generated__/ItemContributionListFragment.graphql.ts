/**
 * @generated SignedSource<<2f91041d06a6d6fe08bd747328e1ff40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemContributionListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly contributor: {
      readonly __typename: string;
      readonly slug?: String;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameColumnFragment">;
    };
    readonly createdAt: String;
    readonly id: string;
    readonly item: {
      readonly slug: String;
      readonly title: string;
    };
    readonly role: string | null;
    readonly slug: String;
    readonly updatedAt: String;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "ItemContributionListFragment";
};
export type ItemContributionListFragment$key = {
  readonly " $data"?: ItemContributionListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemContributionListFragment">;
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
  "name": "ItemContributionListFragment",
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
                (v0/*: any*/)
              ],
              "type": "Sluggable",
              "abstractKey": "__isSluggable"
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
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            }
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
  "type": "ItemContributionConnection",
  "abstractKey": null
};
})();

(node as any).hash = "da94b5c898ab71a19b9546d83da55387";

export default node;
