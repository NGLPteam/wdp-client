/**
 * @generated SignedSource<<f5150f2428a7c878d6cd9e80be009440>>
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
  readonly harvestAttempt: {
    readonly slug: string;
  } | null | undefined;
  readonly harvestMapping: {
    readonly slug: string;
  } | null | undefined;
  readonly harvestRecord: {
    readonly slug: string;
  } | null | undefined;
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

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
];
return {
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMapping",
      "kind": "LinkedField",
      "name": "harvestMapping",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestRecord",
      "kind": "LinkedField",
      "name": "harvestRecord",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestAttempt",
      "kind": "LinkedField",
      "name": "harvestAttempt",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "HarvestMessage",
  "abstractKey": null
};
})();

(node as any).hash = "0b8d8244f7e9d2ea58daa10302394e97";

export default node;
