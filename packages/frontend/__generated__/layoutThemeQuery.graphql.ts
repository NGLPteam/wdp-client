/**
 * @generated SignedSource<<ee3f8ed90bd966297d6892e87f400208>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type layoutThemeQuery$variables = Record<PropertyKey, never>;
export type layoutThemeQuery$data = {
  readonly globalConfiguration: {
    readonly theme: {
      readonly color: string;
      readonly font: string;
    };
  };
};
export type layoutThemeQuery = {
  response: layoutThemeQuery$data;
  variables: layoutThemeQuery$variables;
};

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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "layoutThemeQuery",
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "layoutThemeQuery",
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
    "cacheID": "5afd190a1f94b362cc437d4fe4386680",
    "id": null,
    "metadata": {},
    "name": "layoutThemeQuery",
    "operationKind": "query",
    "text": "query layoutThemeQuery {\n  globalConfiguration {\n    theme {\n      color\n      font\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d111a0ef7c3b64dcf0b048848b51a307";

export default node;
