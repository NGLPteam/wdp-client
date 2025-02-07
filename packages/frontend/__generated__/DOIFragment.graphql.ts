/**
 * @generated SignedSource<<b9799b1cec30def1645ee5a1930d65ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DOIFragment$data = {
  readonly doiData: {
    readonly doi: string | null | undefined;
    readonly url: string | null | undefined;
  };
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
      "concreteType": "DOIData",
      "kind": "LinkedField",
      "name": "doiData",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "doi",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HasDOI",
  "abstractKey": "__isHasDOI"
};

(node as any).hash = "f940e9049e4eaa7f821c94b971c2179f";

export default node;
