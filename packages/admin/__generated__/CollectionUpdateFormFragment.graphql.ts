/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateFormFragment = {
    readonly collectionId: string;
    readonly context: {
        readonly " $fragmentRefs": FragmentRefs<"useSchemaContextFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment" | "SchemaFormFieldsFragment" | "useSchemaPropertiesFragment">;
    readonly " $refType": "CollectionUpdateFormFragment";
};
export type CollectionUpdateFormFragment$data = CollectionUpdateFormFragment;
export type CollectionUpdateFormFragment$key = {
    readonly " $data"?: CollectionUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFragment">;
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
(node as any).hash = '6a15a4028b4d8910e57de9576beab171';
export default node;
