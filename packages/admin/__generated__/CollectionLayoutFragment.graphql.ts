/**
 * @generated SignedSource<<076ed2b0de1c9c2668788625a6476636>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ContentHeaderFragment" | "useBreadcrumbsFragment" | "useChildRouteLinksFragment">;
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
  "type": "Collection",
  "abstractKey": null
};
})();

(node as any).hash = "87ec0f2a7f6446249288429b537b6390";

export default node;
