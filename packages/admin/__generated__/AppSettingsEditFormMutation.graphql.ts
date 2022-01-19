/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UpdateGlobalConfigurationInput = {
    site?: SiteSettingsInput | null | undefined;
    theme?: ThemeSettingsInput | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type SiteSettingsInput = {
    providerName: string;
};
export type ThemeSettingsInput = {
    color: string;
    font: string;
};
export type AppSettingsEditFormMutationVariables = {
    input: UpdateGlobalConfigurationInput;
};
export type AppSettingsEditFormMutationResponse = {
    readonly updateGlobalConfiguration: {
        readonly globalConfiguration: {
            readonly site: {
                readonly providerName: string;
            };
            readonly theme: {
                readonly color: string;
                readonly font: string;
            };
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type AppSettingsEditFormMutation = {
    readonly response: AppSettingsEditFormMutationResponse;
    readonly variables: AppSettingsEditFormMutationVariables;
};



/*
mutation AppSettingsEditFormMutation(
  $input: UpdateGlobalConfigurationInput!
) {
  updateGlobalConfiguration(input: $input) {
    globalConfiguration {
      site {
        providerName
      }
      theme {
        color
        font
      }
      id
    }
    ...MutationForm_mutationErrors
  }
}

fragment MutationForm_mutationErrors on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  attributeErrors {
    path
    type
    messages
  }
  globalErrors {
    message
  }
  errors {
    message
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
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
v3 = {
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
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationAttributeError",
      "kind": "LinkedField",
      "name": "attributeErrors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "path",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messages",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationGlobalError",
      "kind": "LinkedField",
      "name": "globalErrors",
      "plural": true,
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSettingsEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateGlobalConfigurationPayload",
        "kind": "LinkedField",
        "name": "updateGlobalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GlobalConfiguration",
            "kind": "LinkedField",
            "name": "globalConfiguration",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v5/*: any*/)
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppSettingsEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateGlobalConfigurationPayload",
        "kind": "LinkedField",
        "name": "updateGlobalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GlobalConfiguration",
            "kind": "LinkedField",
            "name": "globalConfiguration",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c16965b0a6c89b1b15196f3f10e79922",
    "id": null,
    "metadata": {},
    "name": "AppSettingsEditFormMutation",
    "operationKind": "mutation",
    "text": "mutation AppSettingsEditFormMutation(\n  $input: UpdateGlobalConfigurationInput!\n) {\n  updateGlobalConfiguration(input: $input) {\n    globalConfiguration {\n      site {\n        providerName\n      }\n      theme {\n        color\n        font\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '29524cf0e70bca9d51bbffafabe6b060';
export default node;
