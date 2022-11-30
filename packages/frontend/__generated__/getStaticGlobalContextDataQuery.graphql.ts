/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
export type getStaticGlobalContextDataQueryVariables = {};
export type getStaticGlobalContextDataQueryResponse = {
    readonly globalConfiguration: {
        readonly site: {
            readonly providerName: string;
            readonly installationName: string;
            readonly installationHomePageCopy: string;
            readonly logoMode: SiteLogoMode;
            readonly footer: {
                readonly description: string;
                readonly copyrightStatement: string;
            };
        };
    };
    readonly allCommunities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
                readonly title: string;
            };
        }>;
    };
};
export type getStaticGlobalContextDataQuery = {
    readonly response: getStaticGlobalContextDataQueryResponse;
    readonly variables: getStaticGlobalContextDataQueryVariables;
};



/*
query getStaticGlobalContextDataQuery {
  globalConfiguration {
    site {
      providerName
      installationName
      installationHomePageCopy
      logoMode
      footer {
        description
        copyrightStatement
      }
    }
    id
  }
  allCommunities: communities(order: POSITION_ASCENDING) {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
      "name": "providerName",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "installationHomePageCopy",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logoMode",
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
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "copyrightStatement",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "POSITION_ASCENDING"
  }
],
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
  "name": "title",
  "storageKey": null
},
v4 = {
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
    "name": "getStaticGlobalContextDataQuery",
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
        "alias": "allCommunities",
        "args": (v1/*: any*/),
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
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getStaticGlobalContextDataQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "allCommunities",
        "args": (v1/*: any*/),
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
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      }
    ]
  },
  "params": {
    "cacheID": "6ff5d768c22f538b7f7c5d3697362398",
    "id": null,
    "metadata": {},
    "name": "getStaticGlobalContextDataQuery",
    "operationKind": "query",
    "text": "query getStaticGlobalContextDataQuery {\n  globalConfiguration {\n    site {\n      providerName\n      installationName\n      installationHomePageCopy\n      logoMode\n      footer {\n        description\n        copyrightStatement\n      }\n    }\n    id\n  }\n  allCommunities: communities(order: POSITION_ASCENDING) {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a9f196731606ca053649d05588e33723';
export default node;
