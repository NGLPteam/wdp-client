/**
 * @generated SignedSource<<8af55673c5f869133e111b909a4c7dd6>>
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
    readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectControlFragment">;
  } | null | undefined;
  readonly item: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectControlFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaCheckboxGroupFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaCheckboxGroupFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "515738a0c3162d24ff2fc7eed738740e";

export default node;
