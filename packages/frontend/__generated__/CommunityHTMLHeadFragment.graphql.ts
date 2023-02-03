/**
 * @generated SignedSource<<1e104e54ac6dda7a5d73426f445ddf1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityHTMLHeadFragment$data = {
  readonly title: string;
  readonly " $fragmentType": "CommunityHTMLHeadFragment";
};
export type CommunityHTMLHeadFragment$key = {
  readonly " $data"?: CommunityHTMLHeadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityHTMLHeadFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityHTMLHeadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "6287da412415be6b0e4d507244b2083e";

export default node;
