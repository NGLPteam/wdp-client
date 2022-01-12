/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementsListDataFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly slug: string;
            readonly header: string;
            readonly publishedOn: string;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "EntityAnnouncementsListDataFragment";
};
export type EntityAnnouncementsListDataFragment$data = EntityAnnouncementsListDataFragment;
export type EntityAnnouncementsListDataFragment$key = {
    readonly " $data"?: EntityAnnouncementsListDataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementsListDataFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityAnnouncementsListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AnnouncementEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Announcement",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
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
              "name": "publishedOn",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnnouncementConnection",
  "abstractKey": null
};
(node as any).hash = 'bd51240a0d61ebc06f83b588b1221275';
export default node;
