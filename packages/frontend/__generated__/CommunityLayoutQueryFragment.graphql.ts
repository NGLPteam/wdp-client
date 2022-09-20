/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
    readonly " $refType": "CommunityLayoutQueryFragment";
};
export type CommunityLayoutQueryFragment$data = CommunityLayoutQueryFragment;
export type CommunityLayoutQueryFragment$key = {
    readonly " $data"?: CommunityLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutQueryFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "kind": "FragmentSpread",
      "name": "CommunityLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'fb824ebedf507fe49b725fe1a91f544f';
export default node;
