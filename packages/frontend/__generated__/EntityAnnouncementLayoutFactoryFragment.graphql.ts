/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementLayoutFactoryFragment = {
    readonly announcement?: {
        readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementLayoutFragment">;
    } | null | undefined;
    readonly " $refType": "EntityAnnouncementLayoutFactoryFragment";
};
export type EntityAnnouncementLayoutFactoryFragment$data = EntityAnnouncementLayoutFactoryFragment;
export type EntityAnnouncementLayoutFactoryFragment$key = {
    readonly " $data"?: EntityAnnouncementLayoutFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementLayoutFactoryFragment">;
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
(node as any).hash = 'e7ed12925b1fb692f451fe09f6a95571';
export default node;
