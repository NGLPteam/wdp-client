/**
 * @generated SignedSource<<e19f10521b20f89bff94e24ba69814c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderingNavigationTemplateFragment$data = {
  readonly slots: {
    readonly sampleBlock: {
      readonly content: string | null | undefined;
    } | null | undefined;
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
      "concreteType": "OrderingTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "sampleBlock",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "content",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderingTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "69aa064e19b521b8c71d91726f41564c";

export default node;
