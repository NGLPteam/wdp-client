/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ProviderBarFragment = {
    readonly site: {
        readonly providerName: string;
    };
    readonly " $refType": "ProviderBarFragment";
};
export type ProviderBarFragment$data = ProviderBarFragment;
export type ProviderBarFragment$key = {
    readonly " $data"?: ProviderBarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ProviderBarFragment">;
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
(node as any).hash = 'aec2973674a98a26b6dee54ade43d9d4';
export default node;
