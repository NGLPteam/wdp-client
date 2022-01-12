/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsFragment = {
    readonly title: string;
    readonly breadcrumbs: ReadonlyArray<{
        readonly depth: number;
        readonly " $fragmentRefs": FragmentRefs<"BreadcrumbLinkFragment">;
    }>;
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
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'be25a3c3c4818da8f77f2c807a5ef021';
export default node;
