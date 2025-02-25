/**
 * @generated SignedSource<<0eec8c18491a93e6540bfd430c87dc55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BrowseTreeItemFragment$data = {
  readonly entry: {
    readonly __typename: string;
    readonly layouts?: {
      readonly listItem: {
        readonly template: {
          readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
        } | null | undefined;
      } | null | undefined;
    };
    readonly slug?: string;
  };
  readonly treeDepth: number | null | undefined;
  readonly " $fragmentType": "BrowseTreeItemFragment";
};
export type BrowseTreeItemFragment$key = {
  readonly " $data"?: BrowseTreeItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BrowseTreeItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseTreeItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "treeDepth",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entry",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
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
              "concreteType": "EntityLayouts",
              "kind": "LinkedField",
              "name": "layouts",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ListItemLayoutInstance",
                  "kind": "LinkedField",
                  "name": "listItem",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ListItemTemplateInstance",
                      "kind": "LinkedField",
                      "name": "template",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "sharedListItemTemplateFragment"
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
      "storageKey": null
    }
  ],
  "type": "OrderingEntry",
  "abstractKey": null
};

(node as any).hash = "a3b4abb4e12cb5b42084ff85dba397da";

export default node;
