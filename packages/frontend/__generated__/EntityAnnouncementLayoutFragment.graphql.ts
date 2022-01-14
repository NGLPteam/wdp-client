/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementLayoutFragment = {
    readonly header: string;
    readonly body: string;
    readonly publishedOn: string;
    readonly updatedAt: string;
    readonly " $refType": "EntityAnnouncementLayoutFragment";
};
export type EntityAnnouncementLayoutFragment$data = EntityAnnouncementLayoutFragment;
export type EntityAnnouncementLayoutFragment$key = {
    readonly " $data"?: EntityAnnouncementLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityAnnouncementLayoutFragment",
  "selections": [
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
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedOn",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "Announcement",
  "abstractKey": null
};
(node as any).hash = '45fa39f154fe6333b03a391bf50694ec';
export default node;
