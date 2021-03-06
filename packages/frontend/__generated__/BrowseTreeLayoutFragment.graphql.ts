/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BrowseTreeLayoutFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly treeDepth: number | null;
        readonly ancestors: ReadonlyArray<{
            readonly id: string;
            readonly treeDepth: number | null;
            readonly " $fragmentRefs": FragmentRefs<"BrowseTreeItemFragment">;
        }>;
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
  "name": "treeDepth",
  "storageKey": null
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "BrowseTreeItemFragment"
};
return {
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
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingEntry",
          "kind": "LinkedField",
          "name": "ancestors",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        (v2/*: any*/)
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
})();
(node as any).hash = 'a19398ac8324f1a8a648c27435115fe9';
export default node;
