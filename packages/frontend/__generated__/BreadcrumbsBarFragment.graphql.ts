/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsBarFragment = {
    readonly __typename: string;
    readonly title: string;
    readonly slug?: string | undefined;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '59de2626a642eb171bc8dfc0152d1079';
export default node;
