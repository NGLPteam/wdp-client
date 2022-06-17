/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type GlobalSettingsEditDrawerQueryVariables = {};
export type GlobalSettingsEditDrawerQueryResponse = {
    readonly globalConfiguration: {
        readonly " $fragmentRefs": FragmentRefs<"GlobalSettingsEditFormFragment">;
    };
};
export type GlobalSettingsEditDrawerQuery = {
    readonly response: GlobalSettingsEditDrawerQueryResponse;
    readonly variables: GlobalSettingsEditDrawerQueryVariables;
};



/*
query GlobalSettingsEditDrawerQuery {
  globalConfiguration {
    ...GlobalSettingsEditFormFragment
    id
  }
}

fragment GlobalSettingsEditFormFragment on GlobalConfiguration {
  site {
    providerName
    installationName
    installationHomePageCopy
    footer {
      description
      copyrightStatement
    }
    logoMode
  }
  theme {
    color
    font
  }
  logo {
    ...SiteLogoUploadFragment
  }
}

fragment SiteLogoUploadFragment on SiteLogoAttachment {
  originalFilename
  storage
  original {
    url
    alt
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GlobalSettingsEditDrawerQuery",
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
            "name": "GlobalSettingsEditFormFragment"
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
    "name": "GlobalSettingsEditDrawerQuery",
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logoMode",
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
            "concreteType": "SiteLogoAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "originalFilename",
                "storageKey": null
              },
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
                    "name": "alt",
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
    "cacheID": "4ed8f9a653f2ab1a0169fb3020e245ba",
    "id": null,
    "metadata": {},
    "name": "GlobalSettingsEditDrawerQuery",
    "operationKind": "query",
    "text": "query GlobalSettingsEditDrawerQuery {\n  globalConfiguration {\n    ...GlobalSettingsEditFormFragment\n    id\n  }\n}\n\nfragment GlobalSettingsEditFormFragment on GlobalConfiguration {\n  site {\n    providerName\n    installationName\n    installationHomePageCopy\n    footer {\n      description\n      copyrightStatement\n    }\n    logoMode\n  }\n  theme {\n    color\n    font\n  }\n  logo {\n    ...SiteLogoUploadFragment\n  }\n}\n\nfragment SiteLogoUploadFragment on SiteLogoAttachment {\n  originalFilename\n  storage\n  original {\n    url\n    alt\n  }\n}\n"
  }
};
(node as any).hash = '14c05f979e57359ae35bfe24eb0c1ce9';
export default node;
