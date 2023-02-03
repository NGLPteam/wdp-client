/**
 * @generated SignedSource<<3b3f1945167bd054a8e0d8eceabc91ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBarFragment$data = {
  readonly site: {
    readonly providerName: string;
  };
  readonly " $fragmentType": "ProviderBarFragment";
};
export type ProviderBarFragment$key = {
  readonly " $data"?: ProviderBarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProviderBarFragment",
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

(node as any).hash = "aec2973674a98a26b6dee54ade43d9d4";

export default node;
