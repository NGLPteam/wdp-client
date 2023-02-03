/**
 * @generated SignedSource<<deb215cf125fcac441e2bc56ec31f063>>
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
export type UpdateCollectionInput = {
  clearHeroImage?: boolean | null;
  clearThumbnail?: boolean | null;
  clientMutationId?: string | null;
  collectionId: string;
  doi?: string | null;
  heroImage?: UploadedFileInput | null;
  heroImageMetadata?: ImageMetadataInput | null;
  issn?: string | null;
  published?: VariablePrecisionDateInput | null;
  schemaProperties?: any | null;
  subtitle?: string | null;
  summary?: string | null;
  thumbnail?: UploadedFileInput | null;
  thumbnailMetadata?: ImageMetadataInput | null;
  title: string;
  visibility: EntityVisibility;
  visibleAfterAt?: String | null;
  visibleUntilAt?: String | null;
};
export type UploadedFileInput = {
  id: any;
  metadata?: UploadedFileMetadataInput | null;
  storage?: UploadStorage | null;
};
export type UploadedFileMetadataInput = {
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
};
export type ImageMetadataInput = {
  alt?: string | null;
};
export type VariablePrecisionDateInput = {
  precision: DatePrecision;
  value?: String | null;
};
export type CollectionUpdateFormMutation$variables = {
  input: UpdateCollectionInput;
};
export type CollectionUpdateFormMutation$data = {
  readonly updateCollection: {
    readonly collection: {
      readonly " $fragmentSpreads": FragmentRefs<"CollectionUpdateFormFieldsFragment">;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"CollectionUpdateForm_schemaErrorsFragment" | "MutationForm_mutationErrors">;
  } | null;
};
export type CollectionUpdateFormMutation = {
  response: CollectionUpdateFormMutation$data;
  variables: CollectionUpdateFormMutation$variables;
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
  "name": "path",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
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
        (v2/*: any*/),
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
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaValueError",
  "kind": "LinkedField",
  "name": "schemaErrors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hint",
      "storageKey": null
    },
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "metadata",
      "storageKey": null
    },
    (v2/*: any*/)
  ],
  "storageKey": null
},
v7 = [
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
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "thumb",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageDerivative",
        "kind": "LinkedField",
        "name": "png",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "alt",
            "storageKey": null
          },
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCollectionPayload",
        "kind": "LinkedField",
        "name": "updateCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CollectionUpdateFormFieldsFragment"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v5/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "CollectionUpdateForm_schemaErrorsFragment",
            "selections": [
              (v6/*: any*/)
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
    "name": "CollectionUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCollectionPayload",
        "kind": "LinkedField",
        "name": "updateCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "subtitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "doi",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "issn",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "visibility",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "summary",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "visibleAfterAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "visibleUntilAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "thumbnail",
                "plural": false,
                "selections": (v7/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "heroImage",
                "plural": false,
                "selections": (v7/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "VariablePrecisionDate",
                "kind": "LinkedField",
                "name": "published",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "precision",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
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
          },
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1d794a73e7318ca3b0ebfe75c53c0dc9",
    "id": null,
    "metadata": {},
    "name": "CollectionUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation CollectionUpdateFormMutation(\n  $input: UpdateCollectionInput!\n) {\n  updateCollection(input: $input) {\n    collection {\n      ...CollectionUpdateFormFieldsFragment\n      id\n    }\n    ...MutationForm_mutationErrors\n    ...CollectionUpdateForm_schemaErrorsFragment\n  }\n}\n\nfragment CollectionUpdateFormFieldsFragment on Collection {\n  title\n  subtitle\n  doi\n  issn\n  visibility\n  summary\n  visibleAfterAt\n  visibleUntilAt\n  thumbnail {\n    ...FileUploadFragment\n  }\n  heroImage {\n    ...FileUploadFragment\n  }\n  published {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment CollectionUpdateForm_schemaErrorsFragment on UpdateCollectionPayload {\n  schemaErrors {\n    hint\n    message\n    metadata\n    path\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  originalFilename\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n\nfragment VariablePrecisionDateControlFragment on VariablePrecisionDate {\n  precision\n  value\n}\n"
  }
};
})();

(node as any).hash = "63dc64d2ba8d7e891af3729c05df92aa";

export default node;
