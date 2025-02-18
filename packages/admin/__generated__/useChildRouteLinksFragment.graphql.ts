/**
 * @generated SignedSource<<158bce4264039da0077d877a825708bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ChildEntityKind = "COLLECTION" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type useChildRouteLinksFragment$data = {
  readonly allowedActions: ReadonlyArray<string>;
  readonly schemaVersion: {
    readonly enforcedChildKinds: ReadonlyArray<ChildEntityKind>;
  };
  readonly " $fragmentType": "useChildRouteLinksFragment";
};
export type useChildRouteLinksFragment$key = {
  readonly " $data"?: useChildRouteLinksFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useChildRouteLinksFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useChildRouteLinksFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
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
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "049776ad9ff7b2d7f816cfd643536443";

export default node;
