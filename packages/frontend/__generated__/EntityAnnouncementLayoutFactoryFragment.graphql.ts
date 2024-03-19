/**
 * @generated SignedSource<<b041a37d755ab86b2c109324ac96c522>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementLayoutFactoryFragment$data = {
  readonly announcement?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFragment">;
  } | null | undefined;
  readonly " $fragmentType": "EntityAnnouncementLayoutFactoryFragment";
};
export type EntityAnnouncementLayoutFactoryFragment$key = {
  readonly " $data"?: EntityAnnouncementLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFactoryFragment">;
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
  "name": "EntityAnnouncementLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "EntityAnnouncementLayoutFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "e7ed12925b1fb692f451fe09f6a95571";

export default node;
