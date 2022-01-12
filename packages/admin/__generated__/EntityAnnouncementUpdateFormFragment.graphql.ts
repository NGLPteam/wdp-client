/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementUpdateFormFragment = {
    readonly announcement?: {
        readonly id: string;
        readonly slug: string;
        readonly header: string;
        readonly publishedOn: string;
        readonly teaser: string;
        readonly body: string;
    } | null | undefined;
    readonly " $refType": "EntityAnnouncementUpdateFormFragment";
};
export type EntityAnnouncementUpdateFormFragment$data = EntityAnnouncementUpdateFormFragment;
export type EntityAnnouncementUpdateFormFragment$key = {
    readonly " $data"?: EntityAnnouncementUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementUpdateFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
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
      },
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
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "announcementSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityAnnouncementUpdateFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Community",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'a1fbbb1094b11bcb06174c2866b43a78';
export default node;
