/**
 * @generated SignedSource<<f81869c6539dec12a7c5aa4429e0c32b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BrowseListLayoutFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PageCountFragment" | "PaginationFragment">;
  readonly " $fragmentType": "BrowseListLayoutFragment";
};
export type BrowseListLayoutFragment$key = {
  readonly " $data"?: BrowseListLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BrowseListLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseListLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PaginationFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PageCountFragment"
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};

(node as any).hash = "140eb0a8c71003d6f4cb5f9443fe31bc";

export default node;
