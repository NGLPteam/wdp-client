/**
 * @generated SignedSource<<08ca23a45d32afd3ed56f88de75c270b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingEditFormFragment$data = {
  readonly collection: {
    readonly id: string;
    readonly ordering: {
      readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFieldsFragment">;
    } | null | undefined;
  } | null | undefined;
  readonly item: {
    readonly id: string;
    readonly ordering: {
      readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFieldsFragment">;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaCheckboxGroupFragment">;
  readonly " $fragmentType": "EntityOrderingEditFormFragment";
};
export type EntityOrderingEditFormFragment$key = {
  readonly " $data"?: EntityOrderingEditFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "identifier",
        "variableName": "identifier"
      }
    ],
    "concreteType": "Ordering",
    "kind": "LinkedField",
    "name": "ordering",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EntityOrderingEditFormFieldsFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "identifier"
    },
    {
      "kind": "RootArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingEditFormFragment",
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

(node as any).hash = "974fefba31637c170f43e9ec1f8e9c26";

export default node;
