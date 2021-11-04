/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateFormFragment = {
    readonly communityId: string;
    readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFieldsFragment">;
    readonly " $refType": "CommunityUpdateFormFragment";
};
export type CommunityUpdateFormFragment$data = CommunityUpdateFormFragment;
export type CommunityUpdateFormFragment$key = {
    readonly " $data"?: CommunityUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityUpdateFormFragment",
  "selections": [
    {
      "alias": "communityId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityUpdateFormFieldsFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'b8713ed0fc7f248d7e311f35988e5eff';
export default node;
