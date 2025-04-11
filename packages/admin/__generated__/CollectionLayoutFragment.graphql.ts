/**
 * @generated SignedSource<<835ef57823d4859e5c5a8a13ea1c1c31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ChildEntityKind = "COLLECTION" | "ITEM" | "%future added value";
export type HarvestModificationStatus = "MODIFIED" | "PRISTINE" | "UNHARVESTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment$data = {
  readonly harvestModificationStatus: HarvestModificationStatus;
  readonly harvestRecords: ReadonlyArray<{
    readonly slug: string;
  }>;
  readonly id: string;
  readonly schemaVersion: {
    readonly enforcedChildKinds: ReadonlyArray<ChildEntityKind>;
  };
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"useBreadcrumbsFragment" | "useChildRouteLinksFragment">;
  readonly " $fragmentType": "CollectionLayoutFragment";
};
export type CollectionLayoutFragment$key = {
  readonly " $data"?: CollectionLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionLayoutFragment">;
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
  "name": "CollectionLayoutFragment",
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
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "schemaVersion",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "enforcedChildKinds",
          "storageKey": null
        }
      ],
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
  "type": "Collection",
  "abstractKey": null
};
})();

(node as any).hash = "cb175d35a7b0b2c18915485c20ce0725";

export default node;
