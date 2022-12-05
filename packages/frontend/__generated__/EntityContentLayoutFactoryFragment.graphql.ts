/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityContentLayoutFactoryFragment = {
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly contributions?: {
        readonly " $fragmentRefs": FragmentRefs<"ArticleContributorFragment">;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFactoryFragment" | "JournalContentFragment" | "EntityLayoutFactoryFragment" | "ArticleTextFragment" | "HowToCiteFragment">;
    readonly " $refType": "EntityContentLayoutFactoryFragment";
};
export type EntityContentLayoutFactoryFragment$data = EntityContentLayoutFactoryFragment;
export type EntityContentLayoutFactoryFragment$key = {
    readonly " $data"?: EntityContentLayoutFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityContentLayoutFactoryFragment">;
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
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    }
  ],
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
        },
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
(node as any).hash = '836d90276fe855557a429a7c0f30eb8a';
export default node;
