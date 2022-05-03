/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type pagesIndexQueryVariables = {};
export type pagesIndexQueryResponse = {
    readonly globalConfiguration: {
        readonly site: {
            readonly providerName: string;
            readonly installationName: string;
        };
    };
    readonly " $fragmentRefs": FragmentRefs<"AppHtmlHeadFragment">;
};
export type pagesIndexQuery = {
    readonly response: pagesIndexQueryResponse;
    readonly variables: pagesIndexQueryVariables;
};



/*
query pagesIndexQuery {
  globalConfiguration {
    site {
      providerName
      installationName
    }
    id
  }
  ...AppHtmlHeadFragment
}

fragment AppHtmlHeadFragment on Query {
  globalConfiguration {
    site {
      providerName
      installationName
      footer {
        description
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "providerName",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "installationName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
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
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppHtmlHeadFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexQuery",
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
              (v0/*: any*/),
              (v1/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36b06976225e913010ee5ff048373cec",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery {\n  globalConfiguration {\n    site {\n      providerName\n      installationName\n    }\n    id\n  }\n  ...AppHtmlHeadFragment\n}\n\nfragment AppHtmlHeadFragment on Query {\n  globalConfiguration {\n    site {\n      providerName\n      installationName\n      footer {\n        description\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9bc4edaf3a3c7fe8bac99754c6899184';
export default node;
