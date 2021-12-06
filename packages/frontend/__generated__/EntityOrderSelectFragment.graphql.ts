/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderSelectFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly name: string | null;
            readonly identifier: string;
        };
    }>;
    readonly " $refType": "EntityOrderSelectFragment";
};
export type EntityOrderSelectFragment$data = EntityOrderSelectFragment;
export type EntityOrderSelectFragment$key = {
    readonly " $data"?: EntityOrderSelectFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderSelectFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Ordering",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
              "name": "identifier",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderingConnection",
  "abstractKey": null
};
(node as any).hash = 'b374150022ecb5c4a4298027334687a9';
export default node;
