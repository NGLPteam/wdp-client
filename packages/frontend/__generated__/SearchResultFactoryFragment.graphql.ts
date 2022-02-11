/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchResultFactoryFragment = {
    readonly __typename: string;
    readonly " $fragmentRefs": FragmentRefs<"SearchEntityResultFragment">;
    readonly " $refType": "SearchResultFactoryFragment";
};
export type SearchResultFactoryFragment$data = SearchResultFactoryFragment;
export type SearchResultFactoryFragment$key = {
    readonly " $data"?: SearchResultFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchResultFactoryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultFactoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchEntityResultFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
(node as any).hash = '409918f84b5e498dd330f62948ff7ce1';
export default node;
