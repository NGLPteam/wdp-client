/**
 * @generated SignedSource<<eb245541bbafaff8bad1040fc1a0f60a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SummaryDetailFragment$data = {
  readonly entity: {
    readonly announcements?: {
      readonly nodes: ReadonlyArray<{
        readonly slug: string;
      }>;
      readonly " $fragmentSpreads": FragmentRefs<"AnnouncementsFragment">;
    };
  };
  readonly slots: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly subheader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly summary: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "SummaryDetailFragment";
};
export type SummaryDetailFragment$key = {
  readonly " $data"?: SummaryDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SummaryDetailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AnnouncementConnection",
    "kind": "LinkedField",
    "name": "announcements",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AnnouncementsFragment"
      },
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
            "name": "slug",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v1 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SummaryDetailFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Community",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Item",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DetailTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "subheader",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "summary",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedBlockSlotFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "e576a51fc1ec927e7c45a00dc6a11271";

export default node;
