/**
 * @generated SignedSource<<86a211918995f25bc968e6ba4cc6ed77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type LayoutKind = "HERO" | "LIST_ITEM" | "MAIN" | "METADATA" | "NAVIGATION" | "SUPPLEMENTARY" | "%future added value";
export type NavigationBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type TemplateKind = "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityNavigationTemplateFragment$data = {
  readonly __typename: "NavigationLayoutInstance";
  readonly lastRenderedAt: string | null | undefined;
  readonly template: {
    readonly definition: {
      readonly background: NavigationBackground | null | undefined;
    };
    readonly lastRenderedAt: string | null | undefined;
    readonly layoutKind: LayoutKind;
    readonly slots: {
      readonly entityLabel: {
        readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityNavigationTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
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
          "concreteType": "NavigationTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "background",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
              "name": "entityLabel",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "sharedInlineSlotFragment"
                }
              ],
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

(node as any).hash = "6f517833af91a8531f20ad133aa110bf";

export default node;
