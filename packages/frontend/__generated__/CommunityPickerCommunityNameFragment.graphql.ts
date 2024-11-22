/**
 * @generated SignedSource<<d9019b5412203039c237ef5290fdc190>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityPickerCommunityNameFragment$data = {
  readonly title: string;
  readonly " $fragmentType": "CommunityPickerCommunityNameFragment";
};
export type CommunityPickerCommunityNameFragment$key = {
  readonly " $data"?: CommunityPickerCommunityNameFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityPickerCommunityNameFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityPickerCommunityNameFragment",
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

(node as any).hash = "142a474ddd1888fc36f02b5bdd86888a";

export default node;
