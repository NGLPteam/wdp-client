/**
 * @generated SignedSource<<9fb009df864f3d06282bf233ac70c696>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsFragment$data = {
  readonly featured: {
    readonly legend?: string | null | undefined;
  } | null | undefined;
  readonly properties: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SchemaInstancePropertyFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaFormFieldsContextFragment" | "SchemaSelectorDataFragment">;
  readonly " $fragmentType": "SchemaFormFieldsFragment";
};
export type SchemaFormFieldsFragment$key = {
  readonly " $data"?: SchemaFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaFormFieldsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaFormFieldsFragment",
  "selections": [
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
      "alias": "featured",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "featured"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "legend",
              "storageKey": null
            }
          ],
          "type": "GroupProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"featured\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectorDataFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsContextFragment"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "b42e57c1f981f21834b36c1d52832982";

export default node;
