/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueContentNavFragment = {
    readonly orderings: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderSelectFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"IssueNavListFragment">;
    readonly " $refType": "IssueContentNavFragment";
};
export type IssueContentNavFragment$data = IssueContentNavFragment;
export type IssueContentNavFragment$key = {
    readonly " $data"?: IssueContentNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueContentNavFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueContentNavFragment",
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
(node as any).hash = 'e2df617ba9007d33af78dd032fc4a732';
export default node;
