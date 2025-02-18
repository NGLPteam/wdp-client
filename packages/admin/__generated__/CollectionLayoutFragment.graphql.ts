/**
 * @generated SignedSource<<4c07166b28906c5c59918eeb534225bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ChildEntityKind = "COLLECTION" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment$data = {
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

const node: ReaderFragment = {
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
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

(node as any).hash = "404e65abe3a77c9a221c2faa876432cd";

export default node;
