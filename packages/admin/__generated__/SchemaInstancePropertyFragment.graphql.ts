/**
 * @generated SignedSource<<e2c1cee500568d2b9159cb6c9c88bda0>>
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
  "type": "SchemaProperty",
  "abstractKey": "__isSchemaProperty"
};

(node as any).hash = "aa6f1c3eefe737a57976c910c2da560d";

export default node;
