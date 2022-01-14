/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntitySummaryFactoryFragment = {
    readonly schemaDefinition: {
        readonly identifier: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFragment" | "ArticleSummaryFragment" | "IssueSummaryFragment" | "VolumeSummaryFragment" | "JournalSummaryFragment">;
    readonly " $refType": "EntitySummaryFactoryFragment";
};
export type EntitySummaryFactoryFragment$data = EntitySummaryFactoryFragment;
export type EntitySummaryFactoryFragment$key = {
    readonly " $data"?: EntitySummaryFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFactoryFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "showJournal",
    "variableName": "showJournal"
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showJournal"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntitySummaryFactoryFragment",
  "selections": [
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
          "name": "identifier",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntitySummaryFragment"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "ArticleSummaryFragment"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "IssueSummaryFragment"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "VolumeSummaryFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalSummaryFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = '532e58c4d625e59e266d5c4ce48fa8e7';
export default node;
