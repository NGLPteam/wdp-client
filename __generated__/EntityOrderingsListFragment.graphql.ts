/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingsListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
        readonly slug: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelPaginationFragment" | "ModelPageCountActionsFragment">;
    readonly " $refType": "EntityOrderingsListFragment";
};
export type EntityOrderingsListFragment$data = EntityOrderingsListFragment;
export type EntityOrderingsListFragment$key = {
    readonly " $data"?: EntityOrderingsListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingsListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Ordering",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPaginationFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    }
  ],
  "type": "OrderingConnection",
  "abstractKey": null
};
(node as any).hash = '8fb739c61ea5ad725ba556b83d9f4200';
export default node;
