/**
 * @generated SignedSource<<084ccd39b7cefc2e8d3a972d5feb0c60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NumberPropertyFragment$data = {
  readonly defaultFloat?: number | null;
  readonly defaultInteger?: number | null;
  readonly floatValue?: number | null;
  readonly fullPath: string;
  readonly integerValue?: number | null;
  readonly label: string;
  readonly " $fragmentType": "NumberPropertyFragment";
};
export type NumberPropertyFragment$key = {
  readonly " $data"?: NumberPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NumberPropertyFragment">;
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

(node as any).hash = "8ac7f2d8fe61960d9d80b559ac86a187";

export default node;
