/**
 * @generated SignedSource<<c2e34a012f97d3a214559fbb6faf3964>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DOIFragment$data = {
  readonly doi: string | null | undefined;
  readonly " $fragmentType": "DOIFragment";
};
export type DOIFragment$key = {
  readonly " $data"?: DOIFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DOIFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DOIFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
      "storageKey": null
    }
  ],
  "type": "HasDOI",
  "abstractKey": "__isHasDOI"
};

(node as any).hash = "586c0e3d3461b608c941d3acf6b5f731";

export default node;
