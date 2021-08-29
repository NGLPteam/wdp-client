/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemContributionListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly slug: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly item: {
            readonly title: string | null;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelPaginationFragment" | "ModelPageCountActionsFragment">;
    readonly " $refType": "ItemContributionListFragment";
};
export type ItemContributionListFragment$data = ItemContributionListFragment;
export type ItemContributionListFragment$key = {
    readonly " $data"?: ItemContributionListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemContributionListFragment">;
};



const node: ReaderFragment = {
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
          "name": "slug",
          "storageKey": null
        },
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
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": [
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
      "name": "ModelPaginationFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};
(node as any).hash = '0635c3e4dde816dfc693d2a6bc869754';
export default node;
