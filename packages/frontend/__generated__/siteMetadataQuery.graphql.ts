/**
 * @generated SignedSource<<2fdf9cd976be631749c2eb317eddb48a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type siteMetadataQuery$variables = Record<PropertyKey, never>;
export type siteMetadataQuery$data = {
  readonly globalConfiguration: {
    readonly logo: {
      readonly original: {
        readonly url: string | null | undefined;
      };
    };
    readonly logoMetadata: {
      readonly alt: string | null | undefined;
    } | null | undefined;
    readonly site: {
      readonly installationHomePageCopy: string;
      readonly installationName: string;
    };
  };
};
export type siteMetadataQuery = {
  response: siteMetadataQuery$data;
  variables: siteMetadataQuery$variables;
};

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
      "name": "installationName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "installationHomePageCopy",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "SiteLogoAttachment",
  "kind": "LinkedField",
  "name": "logo",
  "plural": false,
  "selections": [
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
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "logoMetadata",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alt",
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
    "name": "siteMetadataQuery",
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
          (v1/*: any*/),
          (v2/*: any*/)
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
    "name": "siteMetadataQuery",
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
          (v1/*: any*/),
          (v2/*: any*/),
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
    "cacheID": "08f0c818ee042991008e7af29969ef43",
    "id": null,
    "metadata": {},
    "name": "siteMetadataQuery",
    "operationKind": "query",
    "text": "query siteMetadataQuery {\n  globalConfiguration {\n    site {\n      installationName\n      installationHomePageCopy\n    }\n    logo {\n      original {\n        url\n      }\n    }\n    logoMetadata {\n      alt\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2b7ac1176342444d5073630fda61b8be";

export default node;
