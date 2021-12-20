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
    readonly " $fragmentRefs": FragmentRefs<"EntityLayoutFragment" | "JournalLayoutFragment" | "JournalInfoFragment" | "IssueLayoutFragment" | "IssueContentNavFragment" | "IssueSummaryFragment" | "ArticleLayoutFragment" | "ArticleTextFragment">;
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
  "name": "EntityLayoutFragment"
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
          "name": "JournalLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalInfoFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueContentNavFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueSummaryFragment"
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
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArticleTextFragment"
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
(node as any).hash = 'fd43e4f20493f77eebb4077be44d1714';
export default node;
