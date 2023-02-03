/**
 * @generated SignedSource<<b008f8f702c931aeb6bccd4249ac37b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsContextFragment$data = {
  readonly context: {
    readonly " $fragmentSpreads": FragmentRefs<"useSchemaContextFragment">;
  };
  readonly id?: string;
  readonly " $fragmentType": "SchemaFormFieldsContextFragment";
};
export type SchemaFormFieldsContextFragment$key = {
  readonly " $data"?: SchemaFormFieldsContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaFormFieldsContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./SchemaFormFieldsContextRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "SchemaFormFieldsContextFragment",
  "selections": [
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
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "75dc0b6c8d2f888306f0edc89b661b52";

export default node;
