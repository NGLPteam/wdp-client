/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityChildLayoutFragment = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavFragment" | "AppBodyFragment">;
    readonly " $refType": "CommunityChildLayoutFragment";
};
export type CommunityChildLayoutFragment$data = CommunityChildLayoutFragment;
export type CommunityChildLayoutFragment$key = {
    readonly " $data"?: CommunityChildLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityChildLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "concreteType": "Community",
      "kind": "LinkedField",
      "name": "community",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommunityNameFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityCondensedNavFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'b03fbe1f654fbab3804b30cd5ea83e9a';
export default node;
