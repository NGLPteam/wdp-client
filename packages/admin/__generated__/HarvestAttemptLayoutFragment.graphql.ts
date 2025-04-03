/**
 * @generated SignedSource<<e66c521c0fad193d847c5d7b0249d917>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptLayoutFragment$data = {
  readonly harvestMapping: {
    readonly slug: string;
  } | null | undefined;
  readonly harvestSource: {
    readonly name: string;
    readonly slug: string;
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
      "concreteType": "HarvestMapping",
      "kind": "LinkedField",
      "name": "harvestMapping",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestAttempt",
  "abstractKey": null
};
})();

(node as any).hash = "bd5a30bc5203b57253944ce580f99e68";

export default node;
