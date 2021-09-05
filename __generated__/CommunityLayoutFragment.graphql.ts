/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment = {
    readonly name: string;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"useBreadcrumbsFragment">;
    readonly " $refType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$data = CommunityLayoutFragment;
export type CommunityLayoutFragment$key = {
    readonly " $data"?: CommunityLayoutFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useBreadcrumbsFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'd43122e21d862a4bbd43b6d558564e7a';
export default node;
