/**
 * @generated SignedSource<<4cd69d7a0c0c6664dc8708afd0f486a1>>
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
  readonly template: {
    readonly definition: {
      readonly background: NavigationBackground | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"NavigationTabsFragment">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "NavigationTabsFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NavigationLayoutInstance",
  "abstractKey": null
};

(node as any).hash = "da2ab8df690ff5d2580a7da5736ea5a7";

export default node;
