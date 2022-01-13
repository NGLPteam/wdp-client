/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntitySummaryFactoryFragment = {
    readonly schemaDefinition: {
        readonly identifier: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFragment" | "ArticleSummaryFragment" | "IssueSummaryFragment" | "VolumeSummaryFragment">;
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
    "kind": "Literal",
    "name": "showJournal",
    "value": true
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
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = 'b568197f4771a3846eef4650aaf20ca1';
export default node;
