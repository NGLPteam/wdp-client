/**
 * @generated SignedSource<<3d533277dbdcd90d996c5437c4dc6739>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateFormFragment$data = {
  readonly context: {
    readonly " $fragmentSpreads": FragmentRefs<"useSchemaContextFragment">;
  };
  readonly itemId: string;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestingStatusFragment" | "ItemUpdateFormFieldsFragment" | "ParentSelectorFragment" | "SchemaFormFieldsFragment" | "useSchemaPropertiesFragment">;
  readonly " $fragmentType": "ItemUpdateFormFragment";
};
export type ItemUpdateFormFragment$key = {
  readonly " $data"?: ItemUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemUpdateFormFragment",
  "selections": [
    {
      "alias": "itemId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ParentSelectorFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HarvestingStatusFragment"
    },
    {
      "alias": "context",
      "args": null,
      "concreteType": "SchemaInstanceContext",
      "kind": "LinkedField",
      "name": "schemaInstanceContext",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useSchemaContextFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemUpdateFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSchemaPropertiesFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "8f72ae1bbd42d89cb82acc1b9c994efa";

export default node;
