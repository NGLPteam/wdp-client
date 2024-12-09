/**
 * @generated SignedSource<<26a73769fde3f17a5724c660423dedba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityNavBarFragment$data = {
  readonly id?: string;
  readonly layouts?: {
    readonly hero: {
      readonly template: {
        readonly definition: {
          readonly enableDescendantBrowsing: boolean | null | undefined;
          readonly enableDescendantSearch: boolean | null | undefined;
        };
        readonly slots: {
          readonly descendantSearchPrompt: {
            readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
          } | null | undefined;
        };
      } | null | undefined;
    } | null | undefined;
  };
  readonly slug?: string;
  readonly title?: string;
  readonly " $fragmentSpreads": FragmentRefs<"EntityNavListFragment">;
  readonly " $fragmentType": "EntityNavBarFragment";
};
export type EntityNavBarFragment$key = {
  readonly " $data"?: EntityNavBarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityNavBarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityNavBarFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityNavListFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityLayouts",
          "kind": "LinkedField",
          "name": "layouts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "HeroLayoutInstance",
              "kind": "LinkedField",
              "name": "hero",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "HeroTemplateInstance",
                  "kind": "LinkedField",
                  "name": "template",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "HeroTemplateDefinition",
                      "kind": "LinkedField",
                      "name": "definition",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "enableDescendantBrowsing",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "enableDescendantSearch",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "HeroTemplateInstanceSlots",
                      "kind": "LinkedField",
                      "name": "slots",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "descendantSearchPrompt",
                          "plural": false,
                          "selections": [
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "sharedInlineSlotFragment"
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "29deb7fbf2c9ad4dceff6975a2e21184";

export default node;
