/**
 * @generated SignedSource<<0aaa0e387221ec66ce0977406615cf7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemSlugRedirectFragment$data = {
  readonly items: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly slug: String;
  readonly " $fragmentType": "ItemSlugRedirectFragment";
};
export type ItemSlugRedirectFragment$key = {
  readonly " $data"?: ItemSlugRedirectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemSlugRedirectFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemSlugRedirectFragment",
  "selections": [
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
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "items",
      "plural": false,
      "selections": [
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
      ],
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "44189e3fa9550f1e1b85a9eaf3cef152";

export default node;
