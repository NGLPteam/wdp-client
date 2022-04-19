/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityNavBarFragment = {
    readonly id?: string | undefined;
    readonly slug?: string | undefined;
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
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
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
(node as any).hash = '3f24a531cda3ab165d1954c0784ac4d2';
export default node;
