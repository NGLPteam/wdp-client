/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type NumberPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly defaultInteger?: number | null | undefined;
    readonly integerValue?: number | null | undefined;
    readonly defaultFloat?: number | null | undefined;
    readonly floatValue?: number | null | undefined;
    readonly " $refType": "NumberPropertyFragment";
};
export type NumberPropertyFragment$data = NumberPropertyFragment;
export type NumberPropertyFragment$key = {
    readonly " $data"?: NumberPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NumberPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NumberPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
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
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultInteger",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "integerValue",
          "storageKey": null
        }
      ],
      "type": "IntegerProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultFloat",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "floatValue",
          "storageKey": null
        }
      ],
      "type": "FloatProperty",
      "abstractKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
};
(node as any).hash = '8ac7f2d8fe61960d9d80b559ac86a187';
export default node;
