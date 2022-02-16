/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemContributionListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly slug: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly role: string | null;
        readonly contributor: {
            readonly __typename: string;
            readonly slug?: string | undefined;
            readonly " $fragmentRefs": FragmentRefs<"ContributorNameColumnFragment">;
        };
        readonly item: {
            readonly slug: string;
            readonly title: string;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "ItemContributionListFragment";
};
export type ItemContributionListFragment$data = ItemContributionListFragment;
export type ItemContributionListFragment$key = {
    readonly " $data"?: ItemContributionListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemContributionListFragment">;
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
(node as any).hash = 'da94b5c898ab71a19b9546d83da55387';
export default node;
