/**
 * @generated SignedSource<<7fb61fc44349537f11f8c874a1bdb16b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityMetadataFactoryFragment$data = {
  readonly schemaDefinition?: {
    readonly identifier: string;
    readonly kind: SchemaKind;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleMetadataFragment" | "DissertationMetadataFragment" | "PaperMetadataFragment">;
  readonly " $fragmentType": "EntityMetadataFactoryFragment";
};
export type EntityMetadataFactoryFragment$key = {
  readonly " $data"?: EntityMetadataFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityMetadataFactoryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
      "name": "kind",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityMetadataFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleMetadataFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DissertationMetadataFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PaperMetadataFragment"
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "0f81756ab49083980bbb4db2ff67ba35";

export default node;
