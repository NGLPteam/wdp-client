/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityNavBarFragment = {
    readonly id?: string | undefined;
    readonly title?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityNavListFragment">;
    readonly " $refType": "EntityNavBarFragment";
};
export type EntityNavBarFragment$data = EntityNavBarFragment;
export type EntityNavBarFragment$key = {
    readonly " $data"?: EntityNavBarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityNavBarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityNavBarFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityNavListFragment"
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
(node as any).hash = 'de3d45313e13ac639b1ce27afb00c69e';
export default node;
