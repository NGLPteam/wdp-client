/**
 * @generated SignedSource<<23b73e59f3d9e5e92a3eb4404e802aa7>>
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
  } | null | undefined;
  readonly item: {
    readonly id: string;
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

(node as any).hash = "fb2c02e4155707ef5d25f2bdfb4dcbc7";

export default node;
