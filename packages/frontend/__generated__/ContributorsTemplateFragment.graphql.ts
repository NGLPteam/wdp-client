/**
 * @generated SignedSource<<9f8806ca74873181169e9d1b7b78f400>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ContributorListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type TemplateWidth = "FULL" | "HALF" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContributorsTemplateFragment$data = {
  readonly __typename: "ContributorListTemplateInstance";
  readonly contributorsDefinition: {
    readonly background: ContributorListBackground | null | undefined;
    readonly limit: number | null | undefined;
    readonly width: TemplateWidth | null | undefined;
  };
  readonly entity: {
    readonly contributions?: {
      readonly nodes: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"ContributorBlockFragment">;
      }>;
    };
  };
  readonly slots: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "ContributorsTemplateFragment";
};
export type ContributorsTemplateFragment$key = {
  readonly " $data"?: ContributorsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributorBlockFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ItemContributionConnection",
              "kind": "LinkedField",
              "name": "contributions",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ItemContribution",
                  "kind": "LinkedField",
                  "name": "nodes",
                  "plural": true,
                  "selections": (v0/*: any*/),
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Item",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "CollectionContributionConnection",
              "kind": "LinkedField",
              "name": "contributions",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CollectionContribution",
                  "kind": "LinkedField",
                  "name": "nodes",
                  "plural": true,
                  "selections": (v0/*: any*/),
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "contributorsDefinition",
      "args": null,
      "concreteType": "ContributorListTemplateDefinition",
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
          "name": "limit",
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
      "concreteType": "ContributorListTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
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
  "type": "ContributorListTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "ebc4001fd2928bf406b47e584efc4783";

export default node;
