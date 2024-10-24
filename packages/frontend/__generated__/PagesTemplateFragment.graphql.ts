/**
 * @generated SignedSource<<efc3b5300d6d742178b875cd0217bb02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PagesTemplateFragment$data = {
  readonly slots: {
    readonly sampleBlock: {
      readonly content: string | null | undefined;
    } | null | undefined;
  };
  readonly " $fragmentType": "PagesTemplateFragment";
};
export type PagesTemplateFragment$key = {
  readonly " $data"?: PagesTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PagesTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PagesTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageListTemplateInstanceSlots",
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
  "type": "PageListTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "39dd8f062c6c72be62c2f10a6b1794ad";

export default node;
