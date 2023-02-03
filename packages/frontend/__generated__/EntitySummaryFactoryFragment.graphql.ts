/**
 * @generated SignedSource<<626c814448a9944c3ee7a7c723465009>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntitySummaryFactoryFragment$data = {
  readonly schemaDefinition: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSummaryFragment" | "DissertationSummaryFragment" | "EntitySummaryFragment" | "IssueSummaryFragment" | "JournalSummaryFragment" | "VolumeSummaryFragment">;
  readonly " $fragmentType": "EntitySummaryFactoryFragment";
};
export type EntitySummaryFactoryFragment$key = {
  readonly " $data"?: EntitySummaryFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFactoryFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DissertationSummaryFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "549244f4816e199b78da77b27290e428";

export default node;
