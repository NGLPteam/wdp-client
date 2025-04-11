/**
 * @generated SignedSource<<d734274e936137a85d9182e5351a8a6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestModificationStatus = "MODIFIED" | "PRISTINE" | "UNHARVESTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ItemLayoutFragment$data = {
  readonly harvestModificationStatus: HarvestModificationStatus;
  readonly harvestRecords: ReadonlyArray<{
    readonly slug: string;
  }>;
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"useBreadcrumbsFragment" | "useChildRouteLinksFragment">;
  readonly " $fragmentType": "ItemLayoutFragment";
};
export type ItemLayoutFragment$key = {
  readonly " $data"?: ItemLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "harvestModificationStatus",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestRecord",
      "kind": "LinkedField",
      "name": "harvestRecords",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useBreadcrumbsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useChildRouteLinksFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();

(node as any).hash = "c5f1a54c55d26c47cba06765f94a9ee1";

export default node;
