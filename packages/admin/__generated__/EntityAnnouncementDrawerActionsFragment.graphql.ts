/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementDrawerActionsFragment = {
    readonly announcement: {
        readonly id: string;
    } | null;
    readonly " $refType": "EntityAnnouncementDrawerActionsFragment";
};
export type EntityAnnouncementDrawerActionsFragment$data = EntityAnnouncementDrawerActionsFragment;
export type EntityAnnouncementDrawerActionsFragment$key = {
    readonly " $data"?: EntityAnnouncementDrawerActionsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementDrawerActionsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "announcementSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityAnnouncementDrawerActionsFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "announcementSlug"
        }
      ],
      "concreteType": "Announcement",
      "kind": "LinkedField",
      "name": "announcement",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '59e67f02f194e5b3b1b91f1c3af97ba2';
export default node;
