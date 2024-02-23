/**
 * @generated SignedSource<<f158524b9a299dba2604ed7367299864>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleTabNavFragment$data = {
  readonly assets: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly contributions: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly pages: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly slug: string;
        readonly title: string;
      };
    }>;
  };
  readonly schemaVersion: {
    readonly identifier: string;
    readonly name: string;
  };
  readonly " $fragmentType": "ArticleTabNavFragment";
};
export type ArticleTabNavFragment$key = {
  readonly " $data"?: ArticleTabNavFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleTabNavFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleTabNavFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "schemaVersion",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageConnection",
      "kind": "LinkedField",
      "name": "pages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Page",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionConnection",
      "kind": "LinkedField",
      "name": "contributions",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AnyAssetConnection",
      "kind": "LinkedField",
      "name": "assets",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();

(node as any).hash = "f8a618c291c677ca6f5e7998d43eb163";

export default node;
