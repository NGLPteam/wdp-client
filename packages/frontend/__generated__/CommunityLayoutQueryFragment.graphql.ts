/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutQueryFragment = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment" | "AppLayoutEntityFragment" | "EntityHTMLHeadFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadAppFragment">;
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityHTMLHeadFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHTMLHeadAppFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '3443833239df035f488fbebc81b1527a';
export default node;
