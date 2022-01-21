/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type pagesQueryVariables = {};
export type pagesQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutFragment" | "InstanceContentLayoutFragment">;
};
export type pagesQuery = {
    readonly response: pagesQueryResponse;
    readonly variables: pagesQueryVariables;
};



/*
query pagesQuery {
  ...AppLayoutFragment
  ...InstanceContentLayoutFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
}

fragment AppHeaderFragment on Query {
  ...CommunityPickerFragment
}

fragment AppLayoutFragment on Query {
  ...AppBodyFragment
  ...CommunityCondensedNavAppFragment
  ...CommunityPickerFragment
}

fragment CommunityCondensedNavAppFragment on Query {
  ...CommunityPickerFragment
}

fragment CommunityNameFragment on Community {
  title
  slug
  logo {
    storage
    original {
      url
      width
      height
    }
  }
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

fragment InstanceCommunitiesFragment on CommunityConnection {
  edges {
    node {
      slug
      ...InstanceCommunitySummaryFragment
      id
    }
  }
}

fragment InstanceCommunitySummaryFragment on Community {
  slug
  tagline
  ...CommunityNameFragment
}

fragment InstanceContentLayoutFragment on Query {
  communities {
    edges {
      node {
        slug
        id
      }
    }
    pageInfo {
      totalCount
    }
    ...InstanceCommunitiesFragment
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppLayoutFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "InstanceContentLayoutFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesQuery",
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
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "logo",
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
                        "concreteType": "ImageOriginal",
                        "kind": "LinkedField",
                        "name": "original",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "width",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "height",
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
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
    "cacheID": "354e04c63b646a8e388386b3d6e6f58a",
    "id": null,
    "metadata": {},
    "name": "pagesQuery",
    "operationKind": "query",
    "text": "query pagesQuery {\n  ...AppLayoutFragment\n  ...InstanceContentLayoutFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppLayoutFragment on Query {\n  ...AppBodyFragment\n  ...CommunityCondensedNavAppFragment\n  ...CommunityPickerFragment\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment InstanceCommunitiesFragment on CommunityConnection {\n  edges {\n    node {\n      slug\n      ...InstanceCommunitySummaryFragment\n      id\n    }\n  }\n}\n\nfragment InstanceCommunitySummaryFragment on Community {\n  slug\n  tagline\n  ...CommunityNameFragment\n}\n\nfragment InstanceContentLayoutFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        id\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n    ...InstanceCommunitiesFragment\n  }\n}\n"
  }
};
(node as any).hash = '5413a908898f944341b58e1d2d56ae03';
export default node;
