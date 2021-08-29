/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionContributionListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly slug: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly collection: {
            readonly title: string | null;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelPaginationFragment" | "ModelPageCountActionsFragment">;
    readonly " $refType": "CollectionContributionListFragment";
};
export type CollectionContributionListFragment$data = CollectionContributionListFragment;
export type CollectionContributionListFragment$key = {
    readonly " $data"?: CollectionContributionListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CollectionContributionListFragment">;
};



const node: ReaderFragment = {
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
  "type": "CollectionContributionConnection",
  "abstractKey": null
};
(node as any).hash = '8b249503844371e2a8ba34d8b4b14fcb';
export default node;
