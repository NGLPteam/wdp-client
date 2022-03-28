/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BrowseTreeLayoutFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly treeDepth: number | null;
        readonly " $fragmentRefs": FragmentRefs<"BrowseTreeItemFragment">;
    }>;
    readonly pageInfo: {
        readonly " $fragmentRefs": FragmentRefs<"PaginationFragment" | "PageCountFragment">;
    };
    readonly " $refType": "BrowseTreeLayoutFragment";
};
export type BrowseTreeLayoutFragment$data = BrowseTreeLayoutFragment;
export type BrowseTreeLayoutFragment$key = {
    readonly " $data"?: BrowseTreeLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BrowseTreeLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseTreeLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingEntry",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "treeDepth",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BrowseTreeItemFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PaginationFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PageCountFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderingEntryConnection",
  "abstractKey": null
};
(node as any).hash = '129c8d02195dab2a0c66a313d50c9634';
export default node;
