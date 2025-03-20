/**
 * @generated SignedSource<<38dcc3ea7e5da534393f02ef928eea41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMessageLevel = "DEBUG" | "ERROR" | "FATAL" | "INFO" | "TRACE" | "WARN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestMessageFragment$data = {
  readonly createdAt: string;
  readonly id: string;
  readonly level: HarvestMessageLevel;
  readonly message: string;
  readonly tags: ReadonlyArray<string>;
  readonly " $fragmentType": "HarvestMessageFragment";
};
export type HarvestMessageFragment$key = {
  readonly " $data"?: HarvestMessageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMessageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMessageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "level",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tags",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "HarvestMessage",
  "abstractKey": null
};

(node as any).hash = "10ff49c6fc4b03eef3647488243046f8";

export default node;
