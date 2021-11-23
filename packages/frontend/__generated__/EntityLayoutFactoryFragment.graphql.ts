/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFactoryFragment = {
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityLayoutFragment" | "JournalLayoutFragment" | "IssueLayoutFragment">;
    readonly " $refType": "EntityLayoutFactoryFragment";
};
export type EntityLayoutFactoryFragment$data = EntityLayoutFactoryFragment;
export type EntityLayoutFactoryFragment$key = {
    readonly " $data"?: EntityLayoutFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityLayoutFactoryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaDefinition",
          "kind": "LinkedField",
          "name": "schemaDefinition",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueLayoutFragment"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
(node as any).hash = '4a990d9b4ad9966908849f05d3707034';
export default node;
