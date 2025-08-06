/**
 * @generated SignedSource<<521d3cca175fe717da1958d006fcd00b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestEntitiesListFragment$data = {
  readonly harvestEntities: ReadonlyArray<{
    readonly createdAt: string;
    readonly entity: {
      readonly __typename: string;
      readonly slug: string;
      readonly title: string;
    } | null | undefined;
    readonly identifier: string;
    readonly schemaVersion: {
      readonly identifier: string;
      readonly name: string;
    } | null | undefined;
  }>;
  readonly " $fragmentType": "HarvestEntitiesListFragment";
};
export type HarvestEntitiesListFragment$key = {
  readonly " $data"?: HarvestEntitiesListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestEntitiesListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestEntitiesListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestEntity",
      "kind": "LinkedField",
      "name": "harvestEntities",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
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
          "concreteType": null,
          "kind": "LinkedField",
          "name": "entity",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
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
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestRecord",
  "abstractKey": null
};
})();

(node as any).hash = "b7c28c691aad2134e78f397b71b18508";

export default node;
