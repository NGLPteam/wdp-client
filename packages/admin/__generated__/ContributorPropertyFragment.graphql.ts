/**
 * @generated SignedSource<<217099049e6c15bd1682afedb10eae35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorPropertyFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "ContributorPropertyFragment";
};
export type ContributorPropertyFragment$key = {
  readonly " $data"?: ContributorPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "ContributorProperty",
  "abstractKey": null
};

(node as any).hash = "5a154cfa89839f4320fdab1311d62c77";

export default node;
