/**
 * @generated SignedSource<<5459b16ba1d15ef6a60c473d6fde844b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingsListDataFragment$data = {
  readonly harvestMappings: ReadonlyArray<{
    readonly harvestAttempts: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly harvestSet: {
      readonly name: string;
    } | null | undefined;
    readonly id: string;
    readonly slug: string;
    readonly targetEntity: {
      readonly title: string;
    };
  }>;
  readonly " $fragmentType": "HarvestMappingsListDataFragment";
};
export type HarvestMappingsListDataFragment$key = {
  readonly " $data"?: HarvestMappingsListDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingsListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMapping",
      "kind": "LinkedField",
      "name": "harvestMappings",
      "plural": true,
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
          "name": "slug",
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
              "name": "name",
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
              "name": "title",
              "storageKey": null
            }
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
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "b5484d727de0918d8fe4a9c1fd8d8da3";

export default node;
