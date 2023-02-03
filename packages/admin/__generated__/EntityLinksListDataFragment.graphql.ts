/**
 * @generated SignedSource<<8b421dbb1daa6a7f8d81259652aaf02b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type EntityLinkOperator = "CONTAINS" | "REFERENCES" | "%future added value";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityLinksListDataFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly id: string;
    readonly operator: EntityLinkOperator;
    readonly slug: String;
    readonly target: {
      readonly schemaDefinition?: {
        readonly kind: SchemaKind;
        readonly name: string;
      };
      readonly slug?: String;
      readonly title?: string;
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "EntityLinksListDataFragment";
};
export type EntityLinksListDataFragment$key = {
  readonly " $data"?: EntityLinksListDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLinksListDataFragment">;
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
  (v0/*: any*/),
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
    "concreteType": "SchemaDefinition",
    "kind": "LinkedField",
    "name": "schemaDefinition",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "kind",
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
  "name": "EntityLinksListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityLink",
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
          "name": "operator",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "target",
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
  "type": "EntityLinkConnection",
  "abstractKey": null
};
})();

(node as any).hash = "b8cccc874b105cb0a5f726bee4222129";

export default node;
