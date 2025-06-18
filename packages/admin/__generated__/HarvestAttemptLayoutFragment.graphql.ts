/**
 * @generated SignedSource<<2a09734e2e66f443fba3f2159517eff4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestTargetKind = "COLLECTION" | "COMMUNITY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptLayoutFragment$data = {
  readonly beganAt: string | null | undefined;
  readonly harvestMapping: {
    readonly slug: string;
  } | null | undefined;
  readonly harvestSet: {
    readonly identifier: string;
  } | null | undefined;
  readonly harvestSource: {
    readonly name: string;
    readonly slug: string;
  };
  readonly id: string;
  readonly targetEntity: {
    readonly harvestTargetKind: HarvestTargetKind;
    readonly title: string;
  };
  readonly " $fragmentType": "HarvestAttemptLayoutFragment";
};
export type HarvestAttemptLayoutFragment$key = {
  readonly " $data"?: HarvestAttemptLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestAttemptLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestAttemptLayoutFragment",
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
      "name": "beganAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSource",
      "kind": "LinkedField",
      "name": "harvestSource",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSet",
      "kind": "LinkedField",
      "name": "harvestSet",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMapping",
      "kind": "LinkedField",
      "name": "harvestMapping",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "targetEntity",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "harvestTargetKind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestAttempt",
  "abstractKey": null
};
})();

(node as any).hash = "a6d2111e7ae62bf439f4160942e11d02";

export default node;
