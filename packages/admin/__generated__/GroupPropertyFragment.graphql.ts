/**
 * @generated SignedSource<<f808f55483f6f898480aeda24af2900a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupPropertyFragment$data = {
  readonly legend: string | null | undefined;
  readonly path: string;
  readonly properties: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SchemaPropertyFragment">;
  }>;
  readonly " $fragmentType": "GroupPropertyFragment";
};
export type GroupPropertyFragment$key = {
  readonly " $data"?: GroupPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "legend",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "properties",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SchemaPropertyFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GroupProperty",
  "abstractKey": null
};

(node as any).hash = "adac117c59d8a44cdfb9750e08336ba2";

export default node;
