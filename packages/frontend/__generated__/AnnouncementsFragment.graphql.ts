/**
 * @generated SignedSource<<f57036bdd09af792f3de6aab136e0349>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnnouncementsFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly header: string;
    readonly slug: string;
    readonly teaser: string;
  }>;
  readonly " $fragmentType": "AnnouncementsFragment";
};
export type AnnouncementsFragment$key = {
  readonly " $data"?: AnnouncementsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AnnouncementsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AnnouncementsFragment",
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

(node as any).hash = "7d340a6eb20eca19de45cc23972fe854";

export default node;
