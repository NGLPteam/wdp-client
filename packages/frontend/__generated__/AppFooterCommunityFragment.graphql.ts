/**
 * @generated SignedSource<<e6830737ba250d667244877b074f9739>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFooterCommunityFragment$data = {
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameFragment">;
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
      "name": "CommunityNameFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "cc1221cbbea694fcf54b1d6c86c24654";

export default node;
