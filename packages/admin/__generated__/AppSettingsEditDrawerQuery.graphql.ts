/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppSettingsEditDrawerQueryVariables = {};
export type AppSettingsEditDrawerQueryResponse = {
    readonly globalConfiguration: {
        readonly " $fragmentRefs": FragmentRefs<"AppSettingsEditFormFragment">;
    };
};
export type AppSettingsEditDrawerQuery = {
    readonly response: AppSettingsEditDrawerQueryResponse;
    readonly variables: AppSettingsEditDrawerQueryVariables;
};



/*
query AppSettingsEditDrawerQuery {
  globalConfiguration {
    ...AppSettingsEditFormFragment
    id
  }
}

fragment AppSettingsEditFormFragment on GlobalConfiguration {
  site {
    providerName
  }
  theme {
    color
    font
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSettingsEditDrawerQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppSettingsEditFormFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppSettingsEditDrawerQuery",
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
                "name": "providerName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
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
    "cacheID": "a23df0655735ca9185a18c07a5749c89",
    "id": null,
    "metadata": {},
    "name": "AppSettingsEditDrawerQuery",
    "operationKind": "query",
    "text": "query AppSettingsEditDrawerQuery {\n  globalConfiguration {\n    ...AppSettingsEditFormFragment\n    id\n  }\n}\n\nfragment AppSettingsEditFormFragment on GlobalConfiguration {\n  site {\n    providerName\n  }\n  theme {\n    color\n    font\n  }\n}\n"
  }
};
(node as any).hash = '9a35bf790d43ea49a08c238ee4b94814';
export default node;
