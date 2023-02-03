/**
 * @generated SignedSource<<86b2c30f966a2efb83452c91631ae63b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CurrentSearchFiltersFragment$data = {
  readonly coreProperties: ReadonlyArray<{
    readonly label?: string;
    readonly searchPath?: string;
  }>;
  readonly schemas: ReadonlyArray<{
    readonly name: string;
    readonly schemaDefinition: {
      readonly slug: String;
    };
    readonly searchableProperties: ReadonlyArray<{
      readonly label?: string;
      readonly searchPath?: string;
    }>;
  }>;
  readonly " $fragmentType": "CurrentSearchFiltersFragment";
};
export type CurrentSearchFiltersFragment$key = {
  readonly " $data"?: CurrentSearchFiltersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CurrentSearchFiltersFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "searchPath",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      }
    ],
    "type": "SearchableProperty",
    "abstractKey": "__isSearchableProperty"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CurrentSearchFiltersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchableCoreProperty",
      "kind": "LinkedField",
      "name": "coreProperties",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": "schemas",
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "availableSchemaVersions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaDefinition",
          "kind": "LinkedField",
          "name": "schemaDefinition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "searchableProperties",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
})();

(node as any).hash = "791c6f3369f5d9f548739afeb290e6c5";

export default node;
