/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugCommunityQueryVariables = {
    slug: string;
};
export type SlugCommunityQueryResponse = {
    readonly community: {
        readonly title: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
};
export type SlugCommunityQuery = {
    readonly response: SlugCommunityQueryResponse;
    readonly variables: SlugCommunityQueryVariables;
};



/*
query SlugCommunityQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
    title
    id
  }
  ...CommunityLayoutFragment
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
  viewer {
    name
    id
  }
}

fragment CommunityLayoutFragment on Query {
  community(slug: $slug) {
    ...CommunityNameFragment
    id
  }
  ...AppBodyFragment
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
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CommunityLayoutFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugCommunityQuery",
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
          (v4/*: any*/)
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
                  (v4/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b424a814bfa0985e8201fba3b8759e54",
    "id": null,
    "metadata": {},
    "name": "SlugCommunityQuery",
    "operationKind": "query",
    "text": "query SlugCommunityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    title\n    id\n  }\n  ...CommunityLayoutFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...InstallationNameFragment\n  viewer {\n    name\n    id\n  }\n}\n\nfragment CommunityLayoutFragment on Query {\n  community(slug: $slug) {\n    ...CommunityNameFragment\n    id\n  }\n  ...AppBodyFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment InstallationNameFragment on Query {\n  ...CommunityPickerFragment\n}\n"
  }
};
})();
(node as any).hash = 'f3e09dc7ed344077a5ef188558e99e8c';
export default node;
