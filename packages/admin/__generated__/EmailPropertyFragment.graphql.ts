/**
 * @generated SignedSource<<be90e8dd2d46dd44b37f9618195c76e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmailPropertyFragment$data = {
  readonly address: string | null | undefined;
  readonly defaultAddress: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "EmailPropertyFragment";
};
export type EmailPropertyFragment$key = {
  readonly " $data"?: EmailPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EmailPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EmailPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultAddress",
      "storageKey": null
    }
  ],
  "type": "EmailProperty",
  "abstractKey": null
};

(node as any).hash = "3788d833d7ae4a71c4a6e6e3655ec09c";

export default node;
