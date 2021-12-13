/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleTabNavFragment = {
    readonly pages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly title: string;
                readonly slug: string;
            };
        }>;
    };
    readonly contributions: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly assets: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $refType": "ArticleTabNavFragment";
};
export type ArticleTabNavFragment$data = ArticleTabNavFragment;
export type ArticleTabNavFragment$key = {
    readonly " $data"?: ArticleTabNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleTabNavFragment">;
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
(node as any).hash = '5e11616b7af3b312da315eea4b73f2cd';
export default node;
