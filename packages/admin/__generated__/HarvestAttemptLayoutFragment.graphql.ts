/**
 * @generated SignedSource<<6e64429064b44abaf8c0e92c44d06d3c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
export type HarvestTargetKind = "COLLECTION" | "COMMUNITY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptLayoutFragment$data = {
  readonly beganAt: string | null | undefined;
  readonly harvestMapping: {
    readonly metadataFormat: HarvestMetadataFormat;
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
    readonly slug: string;
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "metadataFormat",
          "storageKey": null
        }
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
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestAttempt",
  "abstractKey": null
};
})();

(node as any).hash = "889c394b3e9c8744fa2b76eb4300989a";

export default node;
