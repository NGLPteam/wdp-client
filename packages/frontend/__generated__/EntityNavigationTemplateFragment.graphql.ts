/**
 * @generated SignedSource<<0e8848abcdd6fabd8a2bbbf0fb6eff3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type NavigationBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityNavigationTemplateFragment$data = {
  readonly __typename: "NavigationLayoutInstance";
  readonly template: {
    readonly definition: {
      readonly background: NavigationBackground | null | undefined;
    };
    readonly slots: {
      readonly " $fragmentSpreads": FragmentRefs<"NavigationTabsFragment">;
    };
  } | null | undefined;
  readonly " $fragmentType": "EntityNavigationTemplateFragment";
};
export type EntityNavigationTemplateFragment$key = {
  readonly " $data"?: EntityNavigationTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityNavigationTemplateFragment">;
};

const node: ReaderFragment = {
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "NavigationTabsFragment"
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

(node as any).hash = "dc6856938e4983f3240cabce67b47c12";

export default node;
