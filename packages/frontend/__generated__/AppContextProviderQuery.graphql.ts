/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppContextProviderQueryVariables = {};
export type AppContextProviderQueryResponse = {
    readonly globalConfiguration: {
        readonly theme: {
            readonly color: string;
            readonly font: string;
        };
    };
    readonly " $fragmentRefs": FragmentRefs<"GlobalContextFragment">;
};
export type AppContextProviderQuery = {
    readonly response: AppContextProviderQueryResponse;
    readonly variables: AppContextProviderQueryVariables;
};



/*
query AppContextProviderQuery {
  ...GlobalContextFragment
  globalConfiguration {
    theme {
      color
      font
    }
    id
  }
}

fragment AppFooterFragment on Query {
  communities {
    pageInfo {
      totalCount
    }
  }
  globalConfiguration {
    site {
      installationName
      footer {
        copyrightStatement
        description
      }
    }
    id
  }
}

fragment AppHeaderFragment on Query {
  communities {
    pageInfo {
      totalCount
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

fragment GlobalContextFragment on Query {
  globalConfiguration {
    ...InstallationNameFragment
    id
  }
  ...CommunityPickerFragment
  ...AppHeaderFragment
  ...AppFooterFragment
}

fragment InstallationNameFragment on GlobalConfiguration {
  site {
    installationName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "ThemeSettings",
  "kind": "LinkedField",
  "name": "theme",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "font",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppContextProviderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "GlobalContextFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppContextProviderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteSettings",
            "kind": "LinkedField",
            "name": "site",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "installationName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SiteFooter",
                "kind": "LinkedField",
                "name": "footer",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "copyrightStatement",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/),
          (v0/*: any*/)
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
                  (v1/*: any*/)
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
    "cacheID": "680b93447895d5a253ea288cb0d1d4eb",
    "id": null,
    "metadata": {},
    "name": "AppContextProviderQuery",
    "operationKind": "query",
    "text": "query AppContextProviderQuery {\n  ...GlobalContextFragment\n  globalConfiguration {\n    theme {\n      color\n      font\n    }\n    id\n  }\n}\n\nfragment AppFooterFragment on Query {\n  communities {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    site {\n      installationName\n      footer {\n        copyrightStatement\n        description\n      }\n    }\n    id\n  }\n}\n\nfragment AppHeaderFragment on Query {\n  communities {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment GlobalContextFragment on Query {\n  globalConfiguration {\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment InstallationNameFragment on GlobalConfiguration {\n  site {\n    installationName\n  }\n}\n"
  }
};
})();
(node as any).hash = '075f147f1bf97fbb197848635dd30287';
export default node;
