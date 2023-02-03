/**
 * @generated SignedSource<<d9a394209a12b91e24b574d9cbfaf986>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityNameColumnFragment$data = {
  readonly name: string;
  readonly slug: String;
  readonly " $fragmentType": "CommunityNameColumnFragment";
};
export type CommunityNameColumnFragment$key = {
  readonly " $data"?: CommunityNameColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameColumnFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNameColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "8e53ce6274dd66696c0f48f1e205e7d8";

export default node;
