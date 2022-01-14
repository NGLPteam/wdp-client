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
        readonly id: string;
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
    id
    title
    ...CommunityUpdateFormFragment
  }
}

fragment CommunityUpdateFormFieldsFragment on Community {
  title
  tagline
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
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
          (v3/*: any*/),
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
          (v3/*: any*/),
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
            "name": "tagline",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d226596f2b0ac169ae282abb6e53407f",
    "id": null,
    "metadata": {},
    "name": "CommunityUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query CommunityUpdateDrawerQuery(\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    id\n    title\n    ...CommunityUpdateFormFragment\n  }\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n  tagline\n  heroImageLayout\n  heroImage {\n    storage\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n}\n\nfragment CommunityUpdateFormFragment on Community {\n  communityId: id\n  ...CommunityUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = '1b5f38fbcff9c6f4e2ee768add6218c8';
export default node;
