/**
 * @generated SignedSource<<0b8bb9f815d78613adb9865d9d3ff1fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityPickerActiveFragment$data = {
  readonly slug: String;
  readonly title: string;
  readonly " $fragmentType": "CommunityPickerActiveFragment";
};
export type CommunityPickerActiveFragment$key = {
  readonly " $data"?: CommunityPickerActiveFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityPickerActiveFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityPickerActiveFragment",
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
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "c4e022f67450ab127ee465353c7150db";

export default node;
