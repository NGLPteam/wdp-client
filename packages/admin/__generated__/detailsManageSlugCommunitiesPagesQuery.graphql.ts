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
        readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFragment" | "CommunityLayoutQueryFragment">;
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
    ...CommunityLayoutQueryFragment
    id
  }
}

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment CommunityLayoutFragment on Community {
  id
  name
  slug
}

fragment CommunityLayoutQueryFragment on Community {
  ...CommunityLayoutFragment
  ...AuthContextFragment
}

fragment CommunityUpdateFormFieldsFragment on Community {
  title
  tagline
  summary
  heroImageLayout
  heroImage {
    storage
    thumb {
      png {
        alt
        url
      }
    }
  }
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
            "name": "tagline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heroImageLayout",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "heroImage",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "storage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "thumb",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageDerivative",
                    "kind": "LinkedField",
                    "name": "png",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "alt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "allowedActions",
                "storageKey": null
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
    "cacheID": "6181a57fd4c5ca0d4a61932f2b96c314",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugCommunitiesPagesQuery(\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    ...CommunityUpdateFormFragment\n    ...CommunityLayoutQueryFragment\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment CommunityLayoutFragment on Community {\n  id\n  name\n  slug\n}\n\nfragment CommunityLayoutQueryFragment on Community {\n  ...CommunityLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n  tagline\n  summary\n  heroImageLayout\n  heroImage {\n    storage\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n}\n\nfragment CommunityUpdateFormFragment on Community {\n  communityId: id\n  ...CommunityUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = '6b3473b656ebf665259ef3e6d22e5e4d';
export default node;
