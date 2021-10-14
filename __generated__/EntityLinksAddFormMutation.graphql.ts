/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityLinkOperator = "CONTAINS" | "REFERENCES" | "%future added value";
export type LinkEntityInput = {
    sourceId: string;
    targetId: string;
    operator: EntityLinkOperator;
    clientMutationId?: string | null;
};
export type EntityLinksAddFormMutationVariables = {
    input: LinkEntityInput;
};
export type EntityLinksAddFormMutationResponse = {
    readonly linkEntity: {
        readonly link: {
            readonly source: {
                readonly title?: string | null;
            };
            readonly target: {
                readonly title?: string | null;
            };
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type EntityLinksAddFormMutation = {
    readonly response: EntityLinksAddFormMutationResponse;
    readonly variables: EntityLinksAddFormMutationVariables;
};



/*
mutation EntityLinksAddFormMutation(
  $input: LinkEntityInput!
) {
  linkEntity(input: $input) {
    link {
      source {
        __typename
        ... on Item {
          title
        }
        ... on Community {
          title
        }
        ... on Collection {
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      target {
        __typename
        ... on Item {
          title
        }
        ... on Community {
          title
        }
        ... on Collection {
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
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
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v3 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "Item",
  "abstractKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "Community",
  "abstractKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v6 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v8 = {
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
      "selections": (v7/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v7/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v9/*: any*/)
    ],
    "type": "Node",
    "abstractKey": "__isNode"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityLinksAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LinkEntityPayload",
        "kind": "LinkedField",
        "name": "linkEntity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityLink",
            "kind": "LinkedField",
            "name": "link",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "source",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v8/*: any*/)
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
    "name": "EntityLinksAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LinkEntityPayload",
        "kind": "LinkedField",
        "name": "linkEntity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityLink",
            "kind": "LinkedField",
            "name": "link",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "source",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ed4446bf5d23b32fe2fe5fda75a7fef0",
    "id": null,
    "metadata": {},
    "name": "EntityLinksAddFormMutation",
    "operationKind": "mutation",
    "text": "mutation EntityLinksAddFormMutation(\n  $input: LinkEntityInput!\n) {\n  linkEntity(input: $input) {\n    link {\n      source {\n        __typename\n        ... on Item {\n          title\n        }\n        ... on Community {\n          title\n        }\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      target {\n        __typename\n        ... on Item {\n          title\n        }\n        ... on Community {\n          title\n        }\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '652fca851f16921eb9cccd7624342f86';
export default node;
