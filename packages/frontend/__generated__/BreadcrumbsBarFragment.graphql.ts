/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsBarFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsFragment">;
    readonly " $refType": "BreadcrumbsBarFragment";
};
export type BreadcrumbsBarFragment$data = BreadcrumbsBarFragment;
export type BreadcrumbsBarFragment$key = {
    readonly " $data"?: BreadcrumbsBarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbsBarFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '9865342ffed5414bc5141d63c54aa922';
export default node;
