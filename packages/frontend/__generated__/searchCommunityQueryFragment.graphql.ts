/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SearchLayoutEntityQuery from "./SearchLayoutEntityQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type searchCommunityQueryFragment = {
    readonly id?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
    readonly " $refType": "searchCommunityQueryFragment";
};
export type searchCommunityQueryFragment$data = searchCommunityQueryFragment;
export type searchCommunityQueryFragment$key = {
    readonly " $data"?: searchCommunityQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"searchCommunityQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "PUBLISHED_ASCENDING",
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "predicates"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "query"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": SearchLayoutEntityQuery,
      "identifierField": "id"
    }
  },
  "name": "searchCommunityQueryFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "order"
        },
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Variable",
          "name": "predicates",
          "variableName": "predicates"
        },
        {
          "kind": "Variable",
          "name": "query",
          "variableName": "query"
        }
      ],
      "kind": "FragmentSpread",
      "name": "SearchLayoutFragment"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'ffd77a4ef7231076cdad039cecbe23c9';
export default node;
