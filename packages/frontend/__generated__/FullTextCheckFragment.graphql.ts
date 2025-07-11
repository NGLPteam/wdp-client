/**
 * @generated SignedSource<<034a3e4e2d4a4e91d00272a14b54f396>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FullTextCheckFragment$data = {
  readonly main: {
    readonly templates: ReadonlyArray<{
      readonly slots?: {
        readonly body: {
          readonly content: string | null | undefined;
          readonly valid: boolean;
        } | null | undefined;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentType": "FullTextCheckFragment";
};
export type FullTextCheckFragment$key = {
  readonly " $data"?: FullTextCheckFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullTextCheckFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullTextCheckFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MainLayoutInstance",
      "kind": "LinkedField",
      "name": "main",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "templates",
          "plural": true,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "DetailTemplateInstanceSlots",
                  "kind": "LinkedField",
                  "name": "slots",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "TemplateSlotBlockInstance",
                      "kind": "LinkedField",
                      "name": "body",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "valid",
                          "storageKey": null
                        },
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
              "type": "DetailTemplateInstance",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EntityLayouts",
  "abstractKey": null
};

(node as any).hash = "b496791f2223445dbe8e6262315e575f";

export default node;
