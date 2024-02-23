/**
 * @generated SignedSource<<5afd20b58b908d9472f14116c862b522>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityContentLayoutFactoryFragment$data = {
  readonly contributions?: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleContributorFragment">;
  };
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleTextFragment" | "EntityLayoutFactoryFragment" | "EntityOrderingLayoutFactoryFragment" | "HowToCiteFragment" | "JournalContentFragment">;
  readonly " $fragmentType": "EntityContentLayoutFactoryFragment";
};
export type EntityContentLayoutFactoryFragment$key = {
  readonly " $data"?: EntityContentLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityContentLayoutFactoryFragment">;
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
  "name": "EntityOrderingLayoutFactoryFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityContentLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalContentFragment"
        }
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
          "name": "EntityLayoutFactoryFragment"
        },
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleTextFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HowToCiteFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContributionConnection",
          "kind": "LinkedField",
          "name": "contributions",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArticleContributorFragment"
            }
          ],
          "storageKey": null
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

(node as any).hash = "b2342ca8e004f15465350a8daaa1fcf9";

export default node;
