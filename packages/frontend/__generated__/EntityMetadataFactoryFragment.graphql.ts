/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityMetadataFactoryFragment = {
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleMetadataBlockFragment">;
    readonly " $refType": "EntityMetadataFactoryFragment";
};
export type EntityMetadataFactoryFragment$data = EntityMetadataFactoryFragment;
export type EntityMetadataFactoryFragment$key = {
    readonly " $data"?: EntityMetadataFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityMetadataFactoryFragment">;
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
          "name": "ArticleMetadataBlockFragment"
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
(node as any).hash = '68a791503acc90976bf8c17af3628e5b';
export default node;
