/**
 * @generated SignedSource<<c05ec540e20d3a4d7f405445a0953554>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PageCountFragment$data = {
  readonly page: number | null;
  readonly perPage: number | null;
  readonly totalCount: number;
  readonly " $fragmentType": "PageCountFragment";
};
export type PageCountFragment$key = {
  readonly " $data"?: PageCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PageCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PageCountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "page",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "perPage",
      "storageKey": null
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};

(node as any).hash = "848440a8d336a9e2248c808bab04e43c";

export default node;
