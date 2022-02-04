/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type rolesManageSlugCommunitiesPagesQueryVariables = {
    communitySlug: string;
};
export type rolesManageSlugCommunitiesPagesQueryResponse = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutQueryFragment">;
    } | null;
};
export type rolesManageSlugCommunitiesPagesQuery = {
    readonly response: rolesManageSlugCommunitiesPagesQueryResponse;
    readonly variables: rolesManageSlugCommunitiesPagesQueryVariables;
};



/*
query rolesManageSlugCommunitiesPagesQuery(
  $communitySlug: Slug!
) {
  community(slug: $communitySlug) {
    ...CommunityLayoutQueryFragment
    id
  }
}

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment CollectionCreateButtonFragment on Entity {
  __isEntity: __typename
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  schemaRanks {
    kind
    id
  }
}

fragment CommunityLayoutFragment on Community {
  id
  name
  ...CollectionCreateButtonFragment
}

fragment CommunityLayoutQueryFragment on Community {
  ...CommunityLayoutFragment
  ...AuthContextFragment
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "rolesManageSlugCommunitiesPagesQuery",
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
            "name": "CommunityLayoutQueryFragment"
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
    "name": "rolesManageSlugCommunitiesPagesQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kind",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "allowedActions",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  }
                ],
                "type": "Sluggable",
                "abstractKey": "__isSluggable"
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8724933ef22946b889ddd2f39f0c34e8",
    "id": null,
    "metadata": {},
    "name": "rolesManageSlugCommunitiesPagesQuery",
    "operationKind": "query",
    "text": "query rolesManageSlugCommunitiesPagesQuery(\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    ...CommunityLayoutQueryFragment\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment CollectionCreateButtonFragment on Entity {\n  __isEntity: __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  schemaRanks {\n    kind\n    id\n  }\n}\n\nfragment CommunityLayoutFragment on Community {\n  id\n  name\n  ...CollectionCreateButtonFragment\n}\n\nfragment CommunityLayoutQueryFragment on Community {\n  ...CommunityLayoutFragment\n  ...AuthContextFragment\n}\n"
  }
};
})();
(node as any).hash = 'a135771fc903da591a5a7237c5fb8ef2';
export default node;
