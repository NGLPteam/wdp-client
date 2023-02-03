/**
 * @generated SignedSource<<dea62fd9b9f8f5d6fde916de2427c106>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingAddFormFragment$data = {
  readonly collection: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectControlFragment" | "SchemaCheckboxGroupFragment">;
  } | null;
  readonly item: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectControlFragment" | "SchemaCheckboxGroupFragment">;
  } | null;
  readonly " $fragmentType": "EntityOrderingAddFormFragment";
};
export type EntityOrderingAddFormFragment$key = {
  readonly " $data"?: EntityOrderingAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingAddFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "OrderDefinitionSelectControlFragment"
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "SchemaCheckboxGroupFragment"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "entitySlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingAddFormFragment",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "71f210e63d5fe44f542e3eb0ff622852";

export default node;
