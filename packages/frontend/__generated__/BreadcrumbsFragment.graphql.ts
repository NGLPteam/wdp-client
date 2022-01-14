/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsFragment = {
    readonly __typename: string;
    readonly title: string;
    readonly breadcrumbs: ReadonlyArray<{
        readonly depth: number;
        readonly " $fragmentRefs": FragmentRefs<"BreadcrumbLinkFragment">;
    }>;
    readonly slug?: string | undefined;
    readonly " $refType": "BreadcrumbsFragment";
};
export type BreadcrumbsFragment$data = BreadcrumbsFragment;
export type BreadcrumbsFragment$key = {
    readonly " $data"?: BreadcrumbsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbsFragment",
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
      "alias": null,
      "args": null,
      "concreteType": "EntityBreadcrumb",
      "kind": "LinkedField",
      "name": "breadcrumbs",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "depth",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BreadcrumbLinkFragment"
        }
      ],
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
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '6237a9b70905956f05610fcd9c290df8';
export default node;
