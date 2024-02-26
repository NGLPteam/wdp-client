/**
 * @generated SignedSource<<915676ad91fc3acdaeb92c489b523a40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementDrawerActionsFragment$data = {
  readonly announcement: {
    readonly id: string;
  } | null | undefined;
  readonly " $fragmentType": "EntityAnnouncementDrawerActionsFragment";
};
export type EntityAnnouncementDrawerActionsFragment$key = {
  readonly " $data"?: EntityAnnouncementDrawerActionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementDrawerActionsFragment">;
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

(node as any).hash = "59e67f02f194e5b3b1b91f1c3af97ba2";

export default node;
