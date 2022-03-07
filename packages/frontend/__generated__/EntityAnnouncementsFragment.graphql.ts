/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementsFragment = {
    readonly nodes: ReadonlyArray<{
        readonly teaser: string;
        readonly header: string;
        readonly slug: string;
    }>;
    readonly " $refType": "EntityAnnouncementsFragment";
};
export type EntityAnnouncementsFragment$data = EntityAnnouncementsFragment;
export type EntityAnnouncementsFragment$key = {
    readonly " $data"?: EntityAnnouncementsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityAnnouncementsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Announcement",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "teaser",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "header",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AnnouncementConnection",
  "abstractKey": null
};
(node as any).hash = '108d9c6621809e654fb1dc98ffc4188d';
export default node;
