/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppContextProviderQueryVariables = {};
export type AppContextProviderQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"GlobalContextFragment" | "ViewerContextFragment">;
};
export type AppContextProviderQuery = {
    readonly response: AppContextProviderQueryResponse;
    readonly variables: AppContextProviderQueryVariables;
};



/*
query AppContextProviderQuery {
  ...GlobalContextFragment
  ...ViewerContextFragment
}

fragment AvatarFragment on ImageAttachment {
  storage
  small {
    webp {
      ...ImageFragment
    }
  }
}

fragment FooterFragment on GlobalConfiguration {
  site {
    footer {
      copyrightStatement
      description
    }
  }
}

fragment GlobalContextFragment on Query {
  globalConfiguration {
    ...ProviderBarFragment
    ...InstallationNameFragment
    ...UnauthorizedMessageFragment
    ...FooterFragment
    ...InstallationLogoFragment
    id
  }
  ...SchemaSelectorSchemasFragment
}

fragment ImageFragment on Image {
  __isImage: __typename
  alt
  url
  width
  height
}

fragment InstallationLogoFragment on GlobalConfiguration {
  site {
    installationName
    logoMode
  }
  logo {
    storage
    sansText {
      size
      webp {
        ...ImageFragment
        width
      }
    }
    withText {
      size
      webp {
        ...ImageFragment
      }
    }
  }
}

fragment InstallationNameFragment on GlobalConfiguration {
  site {
    installationName
  }
}

fragment ProviderBarFragment on GlobalConfiguration {
  site {
    providerName
  }
}

fragment SchemaSelectorModalOptionsFragment on SchemaVersionConnection {
  edges {
    node {
      name
      namespace
      identifier
      kind
      slug
      number
      id
    }
  }
}

fragment SchemaSelectorSchemasFragment on Query {
  schemaVersions {
    nodes {
      name
      kind
      id
    }
    ...SchemaSelectorModalOptionsFragment
  }
}

fragment UnauthorizedMessageFragment on GlobalConfiguration {
  site {
    providerName
  }
}

fragment ViewerContextFragment on Query {
  viewer {
    name
    allowedActions
    uploadAccess
    uploadToken
    avatar {
      ...AvatarFragment
    }
    globalAdmin
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageDerivative",
  "kind": "LinkedField",
  "name": "webp",
  "plural": false,
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/),
        (v2/*: any*/),
        (v5/*: any*/)
      ],
      "type": "Image",
      "abstractKey": "__isImage"
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
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
        "args": null,
        "kind": "FragmentSpread",
        "name": "GlobalContextFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ViewerContextFragment"
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
            "concreteType": "SiteLogoAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "sansText",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageDerivative",
                    "kind": "LinkedField",
                    "name": "webp",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "type": "Image",
                        "abstractKey": "__isImage"
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
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "withText",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SchemaVersionConnection",
        "kind": "LinkedField",
        "name": "schemaVersions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaVersion",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaVersionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "namespace",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "identifier",
                    "storageKey": null
                  },
                  (v9/*: any*/),
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
                    "name": "number",
                    "storageKey": null
                  },
                  (v7/*: any*/)
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
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "allowedActions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uploadAccess",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uploadToken",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "avatar",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "small",
                "plural": false,
                "selections": [
                  (v6/*: any*/)
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
            "name": "globalAdmin",
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a30fa63f466e2d483fb96327a6b0069a",
    "id": null,
    "metadata": {},
    "name": "AppContextProviderQuery",
    "operationKind": "query",
    "text": "query AppContextProviderQuery {\n  ...GlobalContextFragment\n  ...ViewerContextFragment\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment FooterFragment on GlobalConfiguration {\n  site {\n    footer {\n      copyrightStatement\n      description\n    }\n  }\n}\n\nfragment GlobalContextFragment on Query {\n  globalConfiguration {\n    ...ProviderBarFragment\n    ...InstallationNameFragment\n    ...UnauthorizedMessageFragment\n    ...FooterFragment\n    ...InstallationLogoFragment\n    id\n  }\n  ...SchemaSelectorSchemasFragment\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment InstallationLogoFragment on GlobalConfiguration {\n  site {\n    installationName\n    logoMode\n  }\n  logo {\n    storage\n    sansText {\n      size\n      webp {\n        ...ImageFragment\n        width\n      }\n    }\n    withText {\n      size\n      webp {\n        ...ImageFragment\n      }\n    }\n  }\n}\n\nfragment InstallationNameFragment on GlobalConfiguration {\n  site {\n    installationName\n  }\n}\n\nfragment ProviderBarFragment on GlobalConfiguration {\n  site {\n    providerName\n  }\n}\n\nfragment SchemaSelectorModalOptionsFragment on SchemaVersionConnection {\n  edges {\n    node {\n      name\n      namespace\n      identifier\n      kind\n      slug\n      number\n      id\n    }\n  }\n}\n\nfragment SchemaSelectorSchemasFragment on Query {\n  schemaVersions {\n    nodes {\n      name\n      kind\n      id\n    }\n    ...SchemaSelectorModalOptionsFragment\n  }\n}\n\nfragment UnauthorizedMessageFragment on GlobalConfiguration {\n  site {\n    providerName\n  }\n}\n\nfragment ViewerContextFragment on Query {\n  viewer {\n    name\n    allowedActions\n    uploadAccess\n    uploadToken\n    avatar {\n      ...AvatarFragment\n    }\n    globalAdmin\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9046c90d28e32c399d0e9b1426a162c7';
export default node;
