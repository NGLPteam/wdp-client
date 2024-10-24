/**
 * @generated SignedSource<<03c681dd815327b951fcdd93dad9650d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DescendantsTemplateFragment$data = {
  readonly slots: {
    readonly sampleBlock: {
      readonly content: string | null | undefined;
    } | null | undefined;
  };
  readonly " $fragmentType": "DescendantsTemplateFragment";
};
export type DescendantsTemplateFragment$key = {
  readonly " $data"?: DescendantsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DescendantsTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DescendantsTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "DescendantListTemplateInstanceSlots",
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
  "type": "DescendantListTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "bc402dd39bafc87d9d358cd5dcba2a09";

export default node;
