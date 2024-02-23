/**
 * @generated SignedSource<<ad36637016eca550e19b16aa4173b582>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFactoryFragment$data = {
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleLayoutFragment" | "EntityLayoutFragment" | "IssueLayoutFragment" | "JournalLayoutFragment" | "SeriesLayoutFragment" | "VolumeLayoutFragment">;
  readonly " $fragmentType": "EntityLayoutFactoryFragment";
};
export type EntityLayoutFactoryFragment$key = {
  readonly " $data"?: EntityLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFactoryFragment">;
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
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityLayoutFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "VolumeLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SeriesLayoutFragment"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleLayoutFragment"
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

(node as any).hash = "b657cc10d01854b564febf35e4433771";

export default node;
