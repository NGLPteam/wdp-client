/**
 * @generated SignedSource<<8732b4f53f361a57b3ea8f9b672a2714>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JournalHeroCompactFragment$data = {
  readonly subtitle: string | null | undefined;
  readonly title: string;
  readonly " $fragmentType": "JournalHeroCompactFragment";
};
export type JournalHeroCompactFragment$key = {
  readonly " $data"?: JournalHeroCompactFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalHeroCompactFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalHeroCompactFragment",
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
      "name": "subtitle",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "8f92ce0f1126e6e8f0c98cefffcdf8e5";

export default node;
