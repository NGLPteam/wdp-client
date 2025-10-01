/**
 * @generated SignedSource<<55d44496e5e4e44ac187fc402e46a878>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPermalinksUpdateFormFragment$data = {
  readonly canonical: boolean;
  readonly id: string;
  readonly permalinkable: {
    readonly id?: string;
    readonly slug?: string;
    readonly title?: string;
  };
  readonly uri: string;
  readonly " $fragmentType": "EntityPermalinksUpdateFormFragment";
};
export type EntityPermalinksUpdateFormFragment$key = {
  readonly " $data"?: EntityPermalinksUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksUpdateFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
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
    "name": "title",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPermalinksUpdateFormFragment",
  "selections": [
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "permalinkable",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Item",
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
  "type": "Permalink",
  "abstractKey": null
};
})();

(node as any).hash = "6560815569039a335271f21335071eca";

export default node;
