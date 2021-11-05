/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SchemaSelectFragment = {
    readonly schemaVersionOptions: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly " $refType": "SchemaSelectFragment";
};
export type SchemaSelectFragment$data = SchemaSelectFragment;
export type SchemaSelectFragment$key = {
    readonly " $data"?: SchemaSelectFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "schemaKind"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "kind",
          "variableName": "schemaKind"
        }
      ],
      "concreteType": "SchemaVersionOption",
      "kind": "LinkedField",
      "name": "schemaVersionOptions",
      "plural": true,
      "selections": [
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
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'f82da6bde36b4909bd5787dcbfb19439';
export default node;
