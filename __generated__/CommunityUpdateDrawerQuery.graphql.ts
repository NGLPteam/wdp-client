/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateDrawerQueryVariables = {
    communitySlug: string;
};
export type CommunityUpdateDrawerQueryResponse = {
    readonly community: {
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFragment">;
    } | null;
};
export type CommunityUpdateDrawerQuery = {
    readonly response: CommunityUpdateDrawerQueryResponse;
    readonly variables: CommunityUpdateDrawerQueryVariables;
};



/*
query CommunityUpdateDrawerQuery(
  $communitySlug: Slug!
) {
  community(slug: $communitySlug) {
    title
    ...CommunityUpdateFormFragment
    id
  }
}

fragment CommunityUpdateFormFieldsFragment on Community {
  title
}

fragment CommunityUpdateFormFragment on Community {
  communityId: id
  ...CommunityUpdateFormFieldsFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "communitySlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "communitySlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunityUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityUpdateFormFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunityUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "communityId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4acd991998c56cfd40cfa9568b35e4f7",
    "id": null,
    "metadata": {},
    "name": "CommunityUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query CommunityUpdateDrawerQuery(\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    title\n    ...CommunityUpdateFormFragment\n    id\n  }\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n}\n\nfragment CommunityUpdateFormFragment on Community {\n  communityId: id\n  ...CommunityUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = 'c3914acdaedff46c6f247910893c0faa';
export default node;
