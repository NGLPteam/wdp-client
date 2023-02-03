/**
 * @generated SignedSource<<5ae415e666605be3bb0c6f103e6dd2c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type URLPropertyFragment$data = {
  readonly url: {
    readonly href: string | null;
    readonly label: string | null;
    readonly title: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "URLPropertyFragment";
};
export type URLPropertyFragment$key = {
  readonly " $data"?: URLPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"URLPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "URLPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "URLReference",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
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
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "URLProperty",
  "abstractKey": null
};

(node as any).hash = "132d13e45fe428d319ff3886f6f9807f";

export default node;
