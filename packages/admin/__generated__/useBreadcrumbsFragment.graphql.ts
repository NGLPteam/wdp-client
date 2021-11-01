/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type useBreadcrumbsFragment = {
    readonly breadcrumbs: ReadonlyArray<{
        readonly depth: number;
        readonly label: string;
        readonly kind: EntityKind;
        readonly slug: string;
    }>;
    readonly " $refType": "useBreadcrumbsFragment";
};
export type useBreadcrumbsFragment$data = useBreadcrumbsFragment;
export type useBreadcrumbsFragment$key = {
    readonly " $data"?: useBreadcrumbsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useBreadcrumbsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useBreadcrumbsFragment",
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
(node as any).hash = '8e5e1e3c314875164452e6f53f01334d';
export default node;
