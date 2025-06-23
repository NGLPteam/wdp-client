/**
 * @generated SignedSource<<4ed66344c86747d289b9d3b9265c119a>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ContentHeaderFragment" | "useBreadcrumbsFragment" | "useChildRouteLinksFragment">;
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
      "name": "ContentHeaderFragment"
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

(node as any).hash = "0ed761714a1035c0b8a3226fe53fc303";

export default node;
