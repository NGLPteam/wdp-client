/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type GlobalContextFragment = {
    readonly globalConfiguration: {
        readonly " $fragmentRefs": FragmentRefs<"ProviderBarFragment">;
    };
    readonly " $refType": "GlobalContextFragment";
};
export type GlobalContextFragment$data = GlobalContextFragment;
export type GlobalContextFragment$key = {
    readonly " $data"?: GlobalContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"GlobalContextFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GlobalConfiguration",
      "kind": "LinkedField",
      "name": "globalConfiguration",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ProviderBarFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '40a9423670b6bec88ec0c84ff8f96993';
export default node;
