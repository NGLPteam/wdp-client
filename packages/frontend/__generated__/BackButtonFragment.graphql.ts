/**
 * @generated SignedSource<<f165aabc7e3da61f32837e9ff46ad1d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BackButtonFragment$data = {
  readonly __typename: string;
  readonly schemaVersion: {
    readonly name: string;
  };
  readonly slug: string;
  readonly " $fragmentType": "BackButtonFragment";
};
export type BackButtonFragment$key = {
  readonly " $data"?: BackButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BackButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BackButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "schemaVersion",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "238dc231a88fce65271ee6d7c1324540";

export default node;
