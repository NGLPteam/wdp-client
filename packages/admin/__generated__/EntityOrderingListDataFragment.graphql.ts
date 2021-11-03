/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingListDataFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
        readonly slug: string;
        readonly inheritedFromSchema: boolean;
        readonly createdAt: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "EntityOrderingListDataFragment";
};
export type EntityOrderingListDataFragment$data = EntityOrderingListDataFragment;
export type EntityOrderingListDataFragment$key = {
    readonly " $data"?: EntityOrderingListDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingListDataFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingListDataFragment",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "inheritedFromSchema",
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
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "OrderingConnection",
  "abstractKey": null
};
(node as any).hash = '65a4fc23b3f010cc0f65c0e839565e23';
export default node;
