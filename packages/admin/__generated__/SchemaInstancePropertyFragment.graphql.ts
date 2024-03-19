/**
 * @generated SignedSource<<fb9d308ba6bc44d4ce82fcd609d474d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaInstancePropertyFragment$data = {
  readonly __typename: string;
  readonly " $fragmentSpreads": FragmentRefs<"GroupPropertyFragment" | "SchemaPropertyFragment">;
  readonly " $fragmentType": "SchemaInstancePropertyFragment";
};
export type SchemaInstancePropertyFragment$key = {
  readonly " $data"?: SchemaInstancePropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaInstancePropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaInstancePropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "GroupPropertyFragment"
        }
      ],
      "type": "GroupProperty",
      "abstractKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaPropertyFragment"
    }
  ],
  "type": "AnySchemaProperty",
  "abstractKey": "__isAnySchemaProperty"
};

(node as any).hash = "4f6721403018ff64c1c868f6cb002bf8";

export default node;
