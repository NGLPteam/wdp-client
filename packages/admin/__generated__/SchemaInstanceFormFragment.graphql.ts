/**
 * @generated SignedSource<<b5aa366fa2000ac93b73608ddf0102d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaInstanceFormFragment$data = {
  readonly context: {
    readonly " $fragmentSpreads": FragmentRefs<"SchemaInstanceProviderFragment">;
  };
  readonly properties: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SchemaInstancePropertyFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaFormFieldsFragment" | "SchemaSelectorDataFragment">;
  readonly " $fragmentType": "SchemaInstanceFormFragment";
};
export type SchemaInstanceFormFragment$key = {
  readonly " $data"?: SchemaInstanceFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaInstanceFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaInstanceFormFragment",
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
          "name": "SchemaInstanceProviderFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "properties",
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperties",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SchemaInstancePropertyFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectorDataFragment"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "083ca8be2d9c353b3973c5f3c9d13bba";

export default node;
