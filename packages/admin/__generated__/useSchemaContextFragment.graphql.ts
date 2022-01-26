/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type ContributorKind = "organization" | "person" | "%future added value";
export type useSchemaContextFragment = {
    readonly context: {
        readonly assets: ReadonlyArray<{
            readonly kind: AssetKind;
            readonly label: string;
            readonly value: string;
        }>;
        readonly contributors: ReadonlyArray<{
            readonly kind: ContributorKind;
            readonly label: string;
            readonly value: string;
        }>;
        readonly defaultValues: unknown;
        readonly entityId: string;
        readonly fieldValues: unknown;
        readonly schemaVersionSlug: string;
    };
    readonly " $refType": "useSchemaContextFragment";
};
export type useSchemaContextFragment$data = useSchemaContextFragment;
export type useSchemaContextFragment$key = {
    readonly " $data"?: useSchemaContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useSchemaContextFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "kind",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "label",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSchemaContextFragment",
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
          "alias": null,
          "args": null,
          "concreteType": "AssetSelectOption",
          "kind": "LinkedField",
          "name": "assets",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ContributorSelectOption",
          "kind": "LinkedField",
          "name": "contributors",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultValues",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "entityId",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fieldValues",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "schemaVersionSlug",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
})();
(node as any).hash = '8cc9bd2764fdfb0bb786c9351f649aad';
export default node;
