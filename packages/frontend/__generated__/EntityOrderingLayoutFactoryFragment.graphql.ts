/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFactoryFragment = {
    readonly schemaDefinition: {
        readonly identifier: string;
    };
    readonly ordering: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFragment" | "IssueOrderingLayoutFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"IssueSidebarNavFragment">;
    readonly " $refType": "EntityOrderingLayoutFactoryFragment";
};
export type EntityOrderingLayoutFactoryFragment$data = EntityOrderingLayoutFactoryFragment;
export type EntityOrderingLayoutFactoryFragment$key = {
    readonly " $data"?: EntityOrderingLayoutFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFactoryFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": "items",
      "kind": "LocalArgument",
      "name": "identifier"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingLayoutFactoryFragment",
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
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "identifier",
          "variableName": "identifier"
        }
      ],
      "concreteType": "Ordering",
      "kind": "LinkedField",
      "name": "ordering",
      "plural": false,
      "selections": [
        {
          "args": (v0/*: any*/),
          "kind": "FragmentSpread",
          "name": "EntityOrderingLayoutFragment"
        },
        {
          "args": (v0/*: any*/),
          "kind": "FragmentSpread",
          "name": "IssueOrderingLayoutFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueSidebarNavFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = 'ef22adfca7a16b0484dc92c0f52755cc';
export default node;
