/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueContentFragment = {
    readonly orderings: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderSelectFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"IssueNavListFragment">;
    readonly " $refType": "IssueContentFragment";
};
export type IssueContentFragment$data = IssueContentFragment;
export type IssueContentFragment$key = {
    readonly " $data"?: IssueContentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueContentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueContentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingConnection",
      "kind": "LinkedField",
      "name": "orderings",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityOrderSelectFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueNavListFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '229f9835b25c35452a3bb2fb444236ab';
export default node;
