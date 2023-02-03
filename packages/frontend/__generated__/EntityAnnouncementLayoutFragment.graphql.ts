/**
 * @generated SignedSource<<afefab453ee10d6d3bc9e8d9528120fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementLayoutFragment$data = {
  readonly body: string;
  readonly header: string;
  readonly publishedOn: String;
  readonly updatedAt: String;
  readonly " $fragmentType": "EntityAnnouncementLayoutFragment";
};
export type EntityAnnouncementLayoutFragment$key = {
  readonly " $data"?: EntityAnnouncementLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFragment">;
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

(node as any).hash = "45fa39f154fe6333b03a391bf50694ec";

export default node;
