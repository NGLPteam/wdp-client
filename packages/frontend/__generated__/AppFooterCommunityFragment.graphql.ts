/**
 * @generated SignedSource<<d0dcd3b1d9c435fa8f8ead6ebc241020>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFooterCommunityFragment$data = {
  readonly slug: String;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameFragment" | "CommunityPickerActiveFragment">;
  readonly " $fragmentType": "AppFooterCommunityFragment";
};
export type AppFooterCommunityFragment$key = {
  readonly " $data"?: AppFooterCommunityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppFooterCommunityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFooterCommunityFragment",
  "selections": [
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
      "name": "title",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerActiveFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNameFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "2e0081a1626aed7bde3b1bfc9692a34f";

export default node;
