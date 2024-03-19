/**
 * @generated SignedSource<<6047baaa15fcb6249f1883344f5ff1e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PaginationFragment$data = {
  readonly page: number | null | undefined;
  readonly pageCount: number | null | undefined;
  readonly " $fragmentType": "PaginationFragment";
};
export type PaginationFragment$key = {
  readonly " $data"?: PaginationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PaginationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PaginationFragment",
  "selections": [
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
      "name": "pageCount",
      "storageKey": null
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};

(node as any).hash = "c81617d6eb26b51c23db990711335ee9";

export default node;
