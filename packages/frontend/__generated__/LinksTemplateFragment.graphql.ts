/**
 * @generated SignedSource<<8e251f165566749f4fc49974a0de61ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinksTemplateFragment$data = {
  readonly slots: {
    readonly sampleBlock: {
      readonly content: string | null | undefined;
    } | null | undefined;
  };
  readonly " $fragmentType": "LinksTemplateFragment";
};
export type LinksTemplateFragment$key = {
  readonly " $data"?: LinksTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinksTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinksTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LinkListTemplateInstanceSlots",
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
  "type": "LinkListTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "3e1a69f06e1e4112f34d3778d1cf74b6";

export default node;
