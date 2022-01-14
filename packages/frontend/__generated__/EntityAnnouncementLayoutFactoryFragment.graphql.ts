/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementLayoutFactoryFragment = {
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly announcement?: {
        readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementLayoutFragment">;
    } | null | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityLayoutFactoryFragment">;
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
          "args": null,
          "concreteType": "SchemaDefinition",
          "kind": "LinkedField",
          "name": "schemaDefinition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "identifier",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityLayoutFactoryFragment"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
(node as any).hash = '7055f6cee1d9153cfd7b0a76599aff27';
export default node;
