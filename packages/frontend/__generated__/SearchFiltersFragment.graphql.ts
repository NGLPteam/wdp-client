/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchFiltersFragment = {
    readonly coreProperties: ReadonlyArray<{
        readonly searchPath?: string | undefined;
        readonly " $fragmentRefs": FragmentRefs<"SearchFilterFragment">;
    }>;
    readonly schemas: ReadonlyArray<{
        readonly searchableProperties: ReadonlyArray<{
            readonly searchPath?: string | undefined;
            readonly label?: string | undefined;
            readonly " $fragmentRefs": FragmentRefs<"SearchFilterFragment">;
        }>;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"SearchSchemaFilterFragment">;
    readonly " $refType": "SearchFiltersFragment";
};
export type SearchFiltersFragment$data = SearchFiltersFragment;
export type SearchFiltersFragment$key = {
    readonly " $data"?: SearchFiltersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFiltersFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchSchemaFilterFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
})();
(node as any).hash = '94dc02f005d7c9cc6be5a8d9cfcfdde0';
export default node;
