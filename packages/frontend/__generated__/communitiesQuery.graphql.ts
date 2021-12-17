/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type communitiesQueryVariables = {};
export type communitiesQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BaseLayoutFragment">;
};
export type communitiesQuery = {
    readonly response: communitiesQueryResponse;
    readonly variables: communitiesQueryVariables;
};



/*
query communitiesQuery {
  ...BaseLayoutFragment
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
  ...CommunityPickerFragment
  ...MobileMenuFragment
}

fragment BaseLayoutFragment on Query {
  ...AppBodyFragment
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

fragment MobileMenuFragment on Query {
  ...CommunityPickerFragment
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "communitiesQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "BaseLayoutFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "communitiesQuery",
    "selections": [
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
                    "name": "title",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dc01854213b0f612b94c3a5b8c6691d3",
    "id": null,
    "metadata": {},
    "name": "communitiesQuery",
    "operationKind": "query",
    "text": "query communitiesQuery {\n  ...BaseLayoutFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...InstallationNameFragment\n  ...CommunityPickerFragment\n  ...MobileMenuFragment\n}\n\nfragment BaseLayoutFragment on Query {\n  ...AppBodyFragment\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment InstallationNameFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment MobileMenuFragment on Query {\n  ...CommunityPickerFragment\n}\n"
  }
};
(node as any).hash = '0cf5c758637bfb6b250320f179f94ffd';
export default node;
