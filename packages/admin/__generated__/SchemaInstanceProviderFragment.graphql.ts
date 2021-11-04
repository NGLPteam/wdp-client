/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type ContributorKind = "organization" | "person" | "%future added value";
export type SchemaInstanceProviderFragment = {
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
    readonly " $refType": "SchemaInstanceProviderFragment";
};
export type SchemaInstanceProviderFragment$data = SchemaInstanceProviderFragment;
export type SchemaInstanceProviderFragment$key = {
    readonly " $data"?: SchemaInstanceProviderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaInstanceProviderFragment">;
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
  "name": "SchemaInstanceProviderFragment",
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
  "type": "SchemaInstanceContext",
  "abstractKey": null
};
})();
(node as any).hash = 'e10a35b95c15513bf1393bdc9598e83a';
export default node;
