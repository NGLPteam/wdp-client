/**
 * @generated SignedSource<<ff67d6a90a9d211389d6c61e63462bae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityPickerActiveFragment$data = {
  readonly slug: string;
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
