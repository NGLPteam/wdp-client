/**
 * @generated SignedSource<<58fb736c67c44930a30c3ef5b0f38683>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortalCommunityPickerFragment$data = {
  readonly title: string;
  readonly " $fragmentType": "PortalCommunityPickerFragment";
};
export type PortalCommunityPickerFragment$key = {
  readonly " $data"?: PortalCommunityPickerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortalCommunityPickerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortalCommunityPickerFragment",
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

(node as any).hash = "9f41da28d80461c775b3ed389b5587f8";

export default node;
