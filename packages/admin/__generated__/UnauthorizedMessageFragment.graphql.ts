/**
 * @generated SignedSource<<f038cba4bbef34c55295b090221af537>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UnauthorizedMessageFragment$data = {
  readonly site: {
    readonly providerName: string;
  };
  readonly " $fragmentType": "UnauthorizedMessageFragment";
};
export type UnauthorizedMessageFragment$key = {
  readonly " $data"?: UnauthorizedMessageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UnauthorizedMessageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UnauthorizedMessageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteSettings",
      "kind": "LinkedField",
      "name": "site",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "providerName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};

(node as any).hash = "c5f65dac262f3cb34a46759223be470d";

export default node;
