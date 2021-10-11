/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type detailsManageSlugCommunitiesPagesQueryVariables = {
    communitySlug: string;
};
export type detailsManageSlugCommunitiesPagesQueryResponse = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFragment" | "CommunityLayoutFragment">;
    } | null;
};
export type detailsManageSlugCommunitiesPagesQuery = {
    readonly response: detailsManageSlugCommunitiesPagesQueryResponse;
    readonly variables: detailsManageSlugCommunitiesPagesQueryVariables;
};



/*
query detailsManageSlugCommunitiesPagesQuery(
  $communitySlug: Slug!
) {
  community(slug: $communitySlug) {
    ...CommunityUpdateFormFragment
    ...CommunityLayoutFragment
    id
  }
}

fragment CommunityLayoutFragment on Community {
  name
  slug
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityUpdateFormFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLayoutFragment"
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
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
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
    "cacheID": "7843193a7f8dad9587bee495b9cfbf17",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugCommunitiesPagesQuery(\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    ...CommunityUpdateFormFragment\n    ...CommunityLayoutFragment\n    id\n  }\n}\n\nfragment CommunityLayoutFragment on Community {\n  name\n  slug\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n}\n\nfragment CommunityUpdateFormFragment on Community {\n  communityId: id\n  ...CommunityUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = 'cd88b181c4bef56a6faa735b1a733cde';
export default node;
