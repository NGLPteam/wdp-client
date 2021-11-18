/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment" | "CommunityNavFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment">;
    readonly " $refType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$data = CommunityLayoutFragment;
export type CommunityLayoutFragment$key = {
    readonly " $data"?: CommunityLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
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
  "name": "CommunityLayoutFragment",
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommunityNavFragment"
        }
      ],
      "storageKey": null
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
(node as any).hash = '51643ddeaea305b9385ffb670ddc08f9';
export default node;
