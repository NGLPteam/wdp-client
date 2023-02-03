/**
 * @generated SignedSource<<3172303ec3598015ab7cf29a03a174d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ISSNFragment$data = {
  readonly issn: string | null;
  readonly " $fragmentType": "ISSNFragment";
};
export type ISSNFragment$key = {
  readonly " $data"?: ISSNFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ISSNFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ISSNFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "issn",
      "storageKey": null
    }
  ],
  "type": "HasISSN",
  "abstractKey": "__isHasISSN"
};

(node as any).hash = "ee0209366037ed42919b6428a3507f72";

export default node;
