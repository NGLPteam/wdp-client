/**
 * @generated SignedSource<<1aaac8033e9a3a11edc698b797126369>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type OrderingBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type TemplateWidth = "FULL" | "HALF" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type OrderingNavigationTemplateFragment$data = {
  readonly hidden: boolean;
  readonly orderingDefinition: {
    readonly background: OrderingBackground | null | undefined;
    readonly width: TemplateWidth | null | undefined;
  };
  readonly orderingPair: {
    readonly exists: boolean;
  };
  readonly " $fragmentSpreads": FragmentRefs<"NavButtonsFragment">;
  readonly " $fragmentType": "OrderingNavigationTemplateFragment";
};
export type OrderingNavigationTemplateFragment$key = {
  readonly " $data"?: OrderingNavigationTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderingNavigationTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderingNavigationTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hidden",
      "storageKey": null
    },
    {
      "alias": "orderingDefinition",
      "args": null,
      "concreteType": "OrderingTemplateDefinition",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "width",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateOrderingPair",
      "kind": "LinkedField",
      "name": "orderingPair",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "exists",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NavButtonsFragment"
    }
  ],
  "type": "OrderingTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "b81bb3a9439a37c712ca8267a0ff04e7";

export default node;
