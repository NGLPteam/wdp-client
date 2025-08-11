/**
 * @generated SignedSource<<196054a618840062a353b599bd4075f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DetailVariant = "COLUMNS" | "FULL" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FullTextCheckFragment$data = {
  readonly main: {
    readonly templates: ReadonlyArray<{
      readonly definition?: {
        readonly showBody: boolean | null | undefined;
        readonly variant: DetailVariant | null | undefined;
      };
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
                  "concreteType": "DetailTemplateDefinition",
                  "kind": "LinkedField",
                  "name": "definition",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "showBody",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "variant",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
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

(node as any).hash = "8c5108e157a10acfaa7add15bb7b9c00";

export default node;
