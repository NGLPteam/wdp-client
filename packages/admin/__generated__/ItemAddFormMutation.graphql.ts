/**
 * @generated SignedSource<<e84e9c14b867062b83277b8598ca0542>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type UploadStorage = "CACHE" | "%future added value";
export type CreateItemInput = {
  clientMutationId?: string | null | undefined;
  doi?: string | null | undefined;
  heroImage?: UploadedFileInput | null | undefined;
  heroImageMetadata?: ImageMetadataInput | null | undefined;
  parentId: string;
  published?: VariablePrecisionDateInput | null | undefined;
  schemaVersionSlug?: string | null | undefined;
  subtitle?: string | null | undefined;
  summary?: string | null | undefined;
  thumbnail?: UploadedFileInput | null | undefined;
  thumbnailMetadata?: ImageMetadataInput | null | undefined;
  title: string;
  visibility: EntityVisibility;
  visibleAfterAt?: string | null | undefined;
  visibleUntilAt?: string | null | undefined;
};
export type UploadedFileInput = {
  id: any;
  metadata?: UploadedFileMetadataInput | null | undefined;
  storage?: UploadStorage | null | undefined;
};
export type UploadedFileMetadataInput = {
  alt?: string | null | undefined;
  filename?: string | null | undefined;
  mimeType?: string | null | undefined;
};
export type ImageMetadataInput = {
  alt?: string | null | undefined;
};
export type VariablePrecisionDateInput = {
  precision: DatePrecision;
  value?: string | null | undefined;
};
export type ItemAddFormMutation$variables = {
  input: CreateItemInput;
};
export type ItemAddFormMutation$data = {
  readonly createItem: {
    readonly item: {
      readonly slug: string;
      readonly title: string;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type ItemAddFormMutation = {
  response: ItemAddFormMutation$data;
  variables: ItemAddFormMutation$variables;
};

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
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
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
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
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
    "name": "ItemAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateItemPayload",
        "kind": "LinkedField",
        "name": "createItem",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
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
              (v4/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
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
    "name": "ItemAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateItemPayload",
        "kind": "LinkedField",
        "name": "createItem",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b7137eb0168bc116ca1cd60754a3b6ec",
    "id": null,
    "metadata": {},
    "name": "ItemAddFormMutation",
    "operationKind": "mutation",
    "text": "mutation ItemAddFormMutation(\n  $input: CreateItemInput!\n) {\n  createItem(input: $input) {\n    item {\n      title\n      slug\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "9ea55b3e3aee29f4d3f5d1b4fc914724";

export default node;
