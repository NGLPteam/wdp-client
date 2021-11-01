/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityPageUpdateFormFragment = {
    readonly page?: {
        readonly id: string;
        readonly title: string;
        readonly slug: string;
        readonly body: string;
        readonly heroImage: {
            readonly thumb: {
                readonly png: {
                    readonly url: string;
                    readonly height: number;
                    readonly width: number;
                    readonly alt: string;
                } | null;
            };
        } | null;
    } | null;
    readonly " $refType": "EntityPageUpdateFormFragment";
};
export type EntityPageUpdateFormFragment$data = EntityPageUpdateFormFragment;
export type EntityPageUpdateFormFragment$key = {
    readonly " $data"?: EntityPageUpdateFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityPageUpdateFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "pageSlug"
      }
    ],
    "concreteType": "Page",
    "kind": "LinkedField",
    "name": "page",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetPreview",
        "kind": "LinkedField",
        "name": "heroImage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PreviewImageMap",
            "kind": "LinkedField",
            "name": "thumb",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PreviewImage",
                "kind": "LinkedField",
                "name": "png",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "height",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "width",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "alt",
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
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "pageSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPageUpdateFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Community",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '41227bd85df537adf8ee93ea28d8fc7b';
export default node;
