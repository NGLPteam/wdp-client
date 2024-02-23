/**
 * @generated SignedSource<<ff71078e41c9e223531990cc16b1ab62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementsFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly header: string;
    readonly slug: string;
    readonly teaser: string;
  }>;
  readonly " $fragmentType": "EntityAnnouncementsFragment";
};
export type EntityAnnouncementsFragment$key = {
  readonly " $data"?: EntityAnnouncementsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementsFragment">;
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

(node as any).hash = "108d9c6621809e654fb1dc98ffc4188d";

export default node;
