/**
 * @generated SignedSource<<ba69532a20060dbf76439ad2d07cfaa8>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ItemUpdateFormFieldsFragment" | "ParentSelectorFragment" | "SchemaFormFieldsFragment" | "useSchemaPropertiesFragment">;
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

(node as any).hash = "d12815b3082c43ddb1e4c7cd8f914c48";

export default node;
