/**
 * @generated SignedSource<<cd0aa335df066ee1fa2c9a07abcb97fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type LayoutKind = "HERO" | "LIST_ITEM" | "MAIN" | "METADATA" | "NAVIGATION" | "SUPPLEMENTARY" | "%future added value";
export type TemplateKind = "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityNavigationTemplateFragment$data = {
  readonly lastRenderedAt: string | null | undefined;
  readonly template: {
    readonly lastRenderedAt: string | null | undefined;
    readonly layoutKind: LayoutKind;
    readonly slots: {
      readonly sampleBlock: {
        readonly content: string | null | undefined;
      } | null | undefined;
      readonly sampleInline: {
        readonly content: string | null | undefined;
      } | null | undefined;
    };
    readonly templateKind: TemplateKind;
  } | null | undefined;
  readonly " $fragmentType": "EntityNavigationTemplateFragment";
};
export type EntityNavigationTemplateFragment$key = {
  readonly " $data"?: EntityNavigationTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityNavigationTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastRenderedAt",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityNavigationTemplateFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "NavigationTemplateInstance",
      "kind": "LinkedField",
      "name": "template",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "layoutKind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "templateKind",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "NavigationTemplateInstanceSlots",
          "kind": "LinkedField",
          "name": "slots",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateSlotInlineInstance",
              "kind": "LinkedField",
              "name": "sampleInline",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateSlotBlockInstance",
              "kind": "LinkedField",
              "name": "sampleBlock",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NavigationLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "bec048b01ad9714a84072d0297112f8a";

export default node;
