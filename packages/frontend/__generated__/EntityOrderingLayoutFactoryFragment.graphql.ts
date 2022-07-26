/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFactoryFragment = {
    readonly schemaDefinition: {
        readonly identifier: string;
    };
    readonly initialOrdering: {
        readonly identifier: string;
        readonly disabled: boolean;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"IssueSidebarNavFragment">;
    readonly " $refType": "EntityOrderingLayoutFactoryFragment";
};
export type EntityOrderingLayoutFactoryFragment$data = EntityOrderingLayoutFactoryFragment;
export type EntityOrderingLayoutFactoryFragment$key = {
    readonly " $data"?: EntityOrderingLayoutFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFactoryFragment">;
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
  "name": "EntityOrderingLayoutFactoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaDefinition",
      "kind": "LinkedField",
      "name": "schemaDefinition",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Ordering",
      "kind": "LinkedField",
      "name": "initialOrdering",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "disabled",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueSidebarNavFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = 'b2c07441676eb36b6a35fd94bbb21faa';
export default node;
