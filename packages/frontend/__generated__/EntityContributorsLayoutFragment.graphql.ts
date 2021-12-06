/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityContributorsLayoutFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
        };
    }>;
    readonly " $refType": "EntityContributorsLayoutFragment";
};
export type EntityContributorsLayoutFragment$data = EntityContributorsLayoutFragment;
export type EntityContributorsLayoutFragment$key = {
    readonly " $data"?: EntityContributorsLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityContributorsLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityContributorsLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContribution",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};
(node as any).hash = '0e0da7ddbdae46e0cfd4d44adf782509';
export default node;
