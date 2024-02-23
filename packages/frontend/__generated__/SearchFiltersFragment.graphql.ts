/**
 * @generated SignedSource<<abcc979b9a8a27cedcf3008984f5e152>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchFiltersFragment$data = {
  readonly coreProperties: ReadonlyArray<{
    readonly searchPath?: string;
    readonly " $fragmentSpreads": FragmentRefs<"SearchFilterFragment">;
  }>;
  readonly schemas: ReadonlyArray<{
    readonly searchableProperties: ReadonlyArray<{
      readonly label?: string;
      readonly searchPath?: string;
      readonly " $fragmentSpreads": FragmentRefs<"SearchFilterFragment">;
    }>;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"SearchSchemaFilterFragment">;
  readonly " $fragmentType": "SearchFiltersFragment";
};
export type SearchFiltersFragment$key = {
  readonly " $data"?: SearchFiltersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFiltersFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchPath",
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "SearchFilterFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFiltersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchableCoreProperty",
      "kind": "LinkedField",
      "name": "coreProperties",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/)
          ],
          "type": "SearchableProperty",
          "abstractKey": "__isSearchableProperty"
        },
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchSchemaFilterFragment"
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
          "concreteType": null,
          "kind": "LinkedField",
          "name": "searchableProperties",
          "plural": true,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
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
            },
            (v1/*: any*/)
          ],
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

(node as any).hash = "94dc02f005d7c9cc6be5a8d9cfcfdde0";

export default node;
