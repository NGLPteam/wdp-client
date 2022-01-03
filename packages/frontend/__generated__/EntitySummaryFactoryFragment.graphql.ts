/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntitySummaryFactoryFragment = {
    readonly schemaDefinition: {
        readonly identifier: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFragment" | "ArticleSummaryFragment" | "IssueSummaryFragment">;
    readonly " $refType": "EntitySummaryFactoryFragment";
};
export type EntitySummaryFactoryFragment$data = EntitySummaryFactoryFragment;
export type EntitySummaryFactoryFragment$key = {
    readonly " $data"?: EntitySummaryFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFactoryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntitySummaryFactoryFragment",
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
      "name": "EntitySummaryFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleSummaryFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueSummaryFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '3e5454e3ec9a155bf6dd1ccfe2852c07';
export default node;
