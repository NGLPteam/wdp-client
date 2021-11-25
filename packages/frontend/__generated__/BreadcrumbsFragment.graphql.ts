/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type BreadcrumbsFragment = {
    readonly breadcrumbs: ReadonlyArray<{
        readonly depth: number;
        readonly label: string;
        readonly kind: EntityKind;
        readonly slug: string;
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "kind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'c1013e3018132ab7aac882cebf50354c';
export default node;
