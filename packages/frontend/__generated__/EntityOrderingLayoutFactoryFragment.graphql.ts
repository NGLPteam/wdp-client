/**
 * @generated SignedSource<<8e87f06cb9a41915990ef6eabaa85124>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFactoryFragment$data = {
  readonly initialOrdering: {
    readonly disabled: boolean;
    readonly identifier: string;
  } | null | undefined;
  readonly schemaDefinition: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"IssueSidebarNavFragment">;
  readonly " $fragmentType": "EntityOrderingLayoutFactoryFragment";
};
export type EntityOrderingLayoutFactoryFragment$key = {
  readonly " $data"?: EntityOrderingLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFactoryFragment">;
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

(node as any).hash = "b2c07441676eb36b6a35fd94bbb21faa";

export default node;
