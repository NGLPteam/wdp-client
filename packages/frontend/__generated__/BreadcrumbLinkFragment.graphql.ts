/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type BreadcrumbLinkFragment = {
    readonly label: string;
    readonly kind: EntityKind;
    readonly slug: string;
    readonly " $refType": "BreadcrumbLinkFragment";
};
export type BreadcrumbLinkFragment$data = BreadcrumbLinkFragment;
export type BreadcrumbLinkFragment$key = {
    readonly " $data"?: BreadcrumbLinkFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbLinkFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbLinkFragment",
  "selections": [
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
  "type": "EntityBreadcrumb",
  "abstractKey": null
};
(node as any).hash = 'fe0d70865c6d6c10b4ebaab910d89831';
export default node;
