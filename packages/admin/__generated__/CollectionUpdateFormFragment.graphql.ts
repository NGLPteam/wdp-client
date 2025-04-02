/**
 * @generated SignedSource<<cf1b72589f7bfc4a46d2727afe3e0b9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateFormFragment$data = {
  readonly collectionId: string;
  readonly context: {
    readonly " $fragmentSpreads": FragmentRefs<"useSchemaContextFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"CollectionUpdateFormFieldsFragment" | "HarvestingStatusFragment" | "ParentSelectorFragment" | "SchemaFormFieldsFragment" | "useSchemaPropertiesFragment">;
  readonly " $fragmentType": "CollectionUpdateFormFragment";
};
export type CollectionUpdateFormFragment$key = {
  readonly " $data"?: CollectionUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionUpdateFormFragment",
  "selections": [
    {
      "alias": "collectionId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HarvestingStatusFragment"
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
      "name": "CollectionUpdateFormFieldsFragment"
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
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "f453018ebb49ab2704185150a81332cd";

export default node;
