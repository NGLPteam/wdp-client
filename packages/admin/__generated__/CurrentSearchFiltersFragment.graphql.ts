/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CurrentSearchFiltersFragment = {
    readonly coreProperties: ReadonlyArray<{
        readonly searchPath?: string | undefined;
        readonly label?: string | undefined;
    }>;
    readonly schemas: ReadonlyArray<{
        readonly searchableProperties: ReadonlyArray<{
            readonly searchPath?: string | undefined;
            readonly label?: string | undefined;
        }>;
    }>;
    readonly " $refType": "CurrentSearchFiltersFragment";
};
export type CurrentSearchFiltersFragment$data = CurrentSearchFiltersFragment;
export type CurrentSearchFiltersFragment$key = {
    readonly " $data"?: CurrentSearchFiltersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CurrentSearchFiltersFragment">;
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
(node as any).hash = 'bfd33aa9cd25e2c3bd0e3ada2cf01ef1';
export default node;
