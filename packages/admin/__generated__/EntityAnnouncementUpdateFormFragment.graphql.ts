/**
 * @generated SignedSource<<f94626666e5d55b6f0f6fede2f7f7634>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementUpdateFormFragment$data = {
  readonly announcement?: {
    readonly body: string;
    readonly header: string;
    readonly id: string;
    readonly publishedOn: string;
    readonly slug: string;
    readonly teaser: string;
  } | null | undefined;
  readonly " $fragmentType": "EntityAnnouncementUpdateFormFragment";
};
export type EntityAnnouncementUpdateFormFragment$key = {
  readonly " $data"?: EntityAnnouncementUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementUpdateFormFragment">;
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
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "a4a594c543e664a74620945ee1eaeb3c";

export default node;
