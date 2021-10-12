/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityLinkOperator = "CONTAINS" | "REFERENCES" | "%future added value";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "METADATA" | "%future added value";
export type EntityLinksListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly slug: string;
        readonly operator: EntityLinkOperator;
        readonly target: {
            readonly slug?: string;
            readonly title?: string | null;
            readonly schemaDefinition?: {
                readonly name: string;
                readonly kind: SchemaKind;
            };
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "EntityLinksListFragment";
};
export type EntityLinksListFragment$data = EntityLinksListFragment;
export type EntityLinksListFragment$key = {
    readonly " $data"?: EntityLinksListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityLinksListFragment">;
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
  "name": "EntityLinksListFragment",
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
(node as any).hash = 'ab6b123fdef64fa5255fdf1c12d176bc';
export default node;
