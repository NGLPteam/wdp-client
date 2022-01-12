/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstanceContentLayoutFragment = {
    readonly communities: {
        readonly " $fragmentRefs": FragmentRefs<"InstanceCommunitiesFragment">;
    };
    readonly " $refType": "InstanceContentLayoutFragment";
};
export type InstanceContentLayoutFragment$data = InstanceContentLayoutFragment;
export type InstanceContentLayoutFragment$key = {
    readonly " $data"?: InstanceContentLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstanceContentLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstanceContentLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommunityConnection",
      "kind": "LinkedField",
      "name": "communities",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "InstanceCommunitiesFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '3d6e4127a3732264ab6baf106618bbca';
export default node;
