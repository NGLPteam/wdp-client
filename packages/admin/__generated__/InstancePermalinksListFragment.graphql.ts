/**
 * @generated SignedSource<<d8852ecd09743f089f83f2e5241af2af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type PermalinkableKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InstancePermalinksListFragment$data = {
  readonly permalinks: {
    readonly nodes: ReadonlyArray<{
      readonly canonical: boolean;
      readonly createdAt: string;
      readonly id: string;
      readonly kind: PermalinkableKind;
      readonly permalinkable: {
        readonly slug?: string;
        readonly title?: string;
      };
      readonly slug: string;
      readonly uri: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
  readonly " $fragmentType": "InstancePermalinksListFragment";
};
export type InstancePermalinksListFragment$key = {
  readonly " $data"?: InstancePermalinksListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InstancePermalinksListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "order"
    },
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstancePermalinksListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "order"
        },
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 30
        }
      ],
      "concreteType": "PermalinkConnection",
      "kind": "LinkedField",
      "name": "permalinks",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Permalink",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "uri",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "canonical",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "kind",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "permalinkable",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "Community",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ModelListPageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "041f1901e10f7b47c61e1c6b68c88329";

export default node;
