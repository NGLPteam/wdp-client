/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutQueryFragment = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment" | "AppLayoutEntityFragment">;
    } | null;
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
          "name": "AppLayoutCommunityFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppLayoutEntityFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'f399e322d7662ff090612cea52891d0d';
export default node;
