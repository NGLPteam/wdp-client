/**
 * @generated SignedSource<<7e978795d63446ce491fad8f4d80c8be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type OrderingBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type OrderingNavigationTemplateFragment$data = {
  readonly __typename: "OrderingTemplateInstance";
  readonly orderingDefinition: {
    readonly background: OrderingBackground | null | undefined;
  };
  readonly slots: {
    readonly " $fragmentSpreads": FragmentRefs<"NavButtonsFragment">;
  };
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
      "name": "__typename",
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NavButtonsFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderingTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "bb5d8998336544df3871d323d9e87ae6";

export default node;
