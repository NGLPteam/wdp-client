/**
 * @generated SignedSource<<4174c8d9403f563417429e74b2a548a6>>
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
export type HarvestMappingsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly harvestAttempts: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly harvestSet: {
      readonly identifier: string;
      readonly name: string;
    } | null | undefined;
    readonly harvestSource: {
      readonly name: string;
    };
    readonly id: string;
    readonly metadataFormat: HarvestMetadataFormat;
    readonly slug: string;
    readonly targetEntity: {
      readonly harvestTargetKind: HarvestTargetKind;
      readonly slug: string;
      readonly title: string;
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "HarvestMappingsListFragment";
};
export type HarvestMappingsListFragment$key = {
  readonly " $data"?: HarvestMappingsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMapping",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "metadataFormat",
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
            (v1/*: any*/)
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
            (v1/*: any*/),
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HarvestAttemptConnection",
          "kind": "LinkedField",
          "name": "harvestAttempts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "totalCount",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "HarvestMappingConnection",
  "abstractKey": null
};
})();

(node as any).hash = "764c971ff5187d77e4beaa046c71aee0";

export default node;
