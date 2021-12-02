/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueContentFragment = {
    readonly items: {
        readonly " $fragmentRefs": FragmentRefs<"IssueContentListFragment">;
    };
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
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "items",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueContentListFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '76dddb8129e589553d23854519a03912';
export default node;
