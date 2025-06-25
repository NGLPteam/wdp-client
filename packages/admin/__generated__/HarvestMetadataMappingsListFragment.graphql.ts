/**
 * @generated SignedSource<<1d935658bd91c8c6a96a4f9c18f75100>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataMappingField = "IDENTIFIER" | "RELATION" | "TITLE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestMetadataMappingsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly createdAt: string;
    readonly field: HarvestMetadataMappingField;
    readonly id: string;
    readonly pattern: string;
    readonly slug: string;
    readonly targetEntity: {
      readonly slug: string;
      readonly title: string;
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "HarvestMetadataMappingsListFragment";
};
export type HarvestMetadataMappingsListFragment$key = {
  readonly " $data"?: HarvestMetadataMappingsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMetadataMappingsListFragment">;
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
  "name": "HarvestMetadataMappingsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMetadataMapping",
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
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pattern",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "field",
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
            (v0/*: any*/),
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
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "HarvestMetadataMappingConnection",
  "abstractKey": null
};
})();

(node as any).hash = "548ef209a0d6a4599dc8946492b7f7d8";

export default node;
