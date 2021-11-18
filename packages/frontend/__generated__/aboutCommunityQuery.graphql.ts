/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type aboutCommunityQueryVariables = {
    slug: string;
};
export type aboutCommunityQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutFragment">;
};
export type aboutCommunityQuery = {
    readonly response: aboutCommunityQueryResponse;
    readonly variables: aboutCommunityQueryVariables;
};



/*
query aboutCommunityQuery(
  $slug: Slug!
) {
  ...CommunityChildLayoutFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
  ...AppFooterFragment
}

fragment AppFooterFragment on Query {
  ...InstallationNameFragment
}

fragment AppHeaderFragment on Query {
  ...InstallationNameFragment
}

fragment CommunityChildLayoutFragment on Query {
  community(slug: $slug) {
    ...CommunityNameFragment
    id
  }
  ...CommunityCondensedNavFragment
  ...AppBodyFragment
}

fragment CommunityCondensedNavFragment on Query {
  ...InstallationNameFragment
}

fragment CommunityNameFragment on Community {
  title
  slug
}

fragment CommunityPickerFragment on Query {
  communities {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}

fragment InstallationNameFragment on Query {
  ...CommunityPickerFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
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
    "name": "aboutCommunityQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CommunityChildLayoutFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "aboutCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "slug",
            "variableName": "slug"
          }
        ],
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v1/*: any*/),
                  (v3/*: any*/)
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
    "cacheID": "e775c3e6f5428b466aaa272c3d461439",
    "id": null,
    "metadata": {},
    "name": "aboutCommunityQuery",
    "operationKind": "query",
    "text": "query aboutCommunityQuery(\n  $slug: Slug!\n) {\n  ...CommunityChildLayoutFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment CommunityChildLayoutFragment on Query {\n  community(slug: $slug) {\n    ...CommunityNameFragment\n    id\n  }\n  ...CommunityCondensedNavFragment\n  ...AppBodyFragment\n}\n\nfragment CommunityCondensedNavFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment InstallationNameFragment on Query {\n  ...CommunityPickerFragment\n}\n"
  }
};
})();
(node as any).hash = '1714fca47d22b494f47fdf3e8ed77239';
export default node;
