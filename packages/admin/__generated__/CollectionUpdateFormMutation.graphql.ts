/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdateCollectionInput = {
    collectionId: string;
    title: string;
    subtitle?: string | null | undefined;
    summary?: string | null | undefined;
    heroImage?: UploadedFileInput | null | undefined;
    heroImageMetadata?: ImageMetadataInput | null | undefined;
    thumbnail?: UploadedFileInput | null | undefined;
    thumbnailMetadata?: ImageMetadataInput | null | undefined;
    accessioned?: VariablePrecisionDateInput | null | undefined;
    available?: VariablePrecisionDateInput | null | undefined;
    issued?: VariablePrecisionDateInput | null | undefined;
    published?: VariablePrecisionDateInput | null | undefined;
    visibility: EntityVisibility;
    visibleAfterAt?: string | null | undefined;
    visibleUntilAt?: string | null | undefined;
    clearHeroImage?: boolean | null | undefined;
    clearThumbnail?: boolean | null | undefined;
    schemaProperties?: unknown | null | undefined;
    doi?: string | null | undefined;
    issn?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type UploadedFileInput = {
    id: unknown;
    storage?: UploadStorage | null | undefined;
    metadata?: UploadedFileMetadataInput | null | undefined;
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
    value?: string | null | undefined;
    precision: DatePrecision;
};
export type CollectionUpdateFormMutationVariables = {
    input: UpdateCollectionInput;
};
export type CollectionUpdateFormMutationResponse = {
    readonly updateCollection: {
        readonly collection: {
            readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors" | "CollectionUpdateForm_schemaErrorsFragment">;
    } | null;
};
export type CollectionUpdateFormMutation = {
    readonly response: CollectionUpdateFormMutationResponse;
    readonly variables: CollectionUpdateFormMutationVariables;
};



/*
mutation CollectionUpdateFormMutation(
  $input: UpdateCollectionInput!
) {
  updateCollection(input: $input) {
    collection {
      ...CollectionUpdateFormFieldsFragment
      id
    }
    ...MutationForm_mutationErrors
    ...CollectionUpdateForm_schemaErrorsFragment
  }
}

fragment CollectionUpdateFormFieldsFragment on Collection {
  title
  subtitle
  doi
  issn
  visibility
  summary
  visibleAfterAt
  visibleUntilAt
  thumbnail {
    storage
    thumb {
      png {
        alt
        url
      }
    }
  }
  heroImage {
    storage
    thumb {
      png {
        alt
        url
      }
    }
  }
  published {
    ...VariablePrecisionDateControlFragment
  }
  accessioned {
    ...VariablePrecisionDateControlFragment
  }
  available {
    ...VariablePrecisionDateControlFragment
  }
  issued {
    ...VariablePrecisionDateControlFragment
  }
}

fragment CollectionUpdateForm_schemaErrorsFragment on UpdateCollectionPayload {
  schemaErrors {
    hint
    message
    metadata
    path
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

fragment VariablePrecisionDateControlFragment on VariablePrecisionDate {
  precision
  value
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
],
v8 = [
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
            ]
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "CollectionUpdateForm_schemaErrorsFragment",
            "selections": [
              (v6/*: any*/)
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
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "VariablePrecisionDate",
                "kind": "LinkedField",
                "name": "accessioned",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "VariablePrecisionDate",
                "kind": "LinkedField",
                "name": "available",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "VariablePrecisionDate",
                "kind": "LinkedField",
                "name": "issued",
                "plural": false,
                "selections": (v8/*: any*/),
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
          (v6/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "86c15f12e66b36e72fd26473b687a67d",
    "id": null,
    "metadata": {},
    "name": "CollectionUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation CollectionUpdateFormMutation(\n  $input: UpdateCollectionInput!\n) {\n  updateCollection(input: $input) {\n    collection {\n      ...CollectionUpdateFormFieldsFragment\n      id\n    }\n    ...MutationForm_mutationErrors\n    ...CollectionUpdateForm_schemaErrorsFragment\n  }\n}\n\nfragment CollectionUpdateFormFieldsFragment on Collection {\n  title\n  subtitle\n  doi\n  issn\n  visibility\n  summary\n  visibleAfterAt\n  visibleUntilAt\n  thumbnail {\n    storage\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n  heroImage {\n    storage\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n  published {\n    ...VariablePrecisionDateControlFragment\n  }\n  accessioned {\n    ...VariablePrecisionDateControlFragment\n  }\n  available {\n    ...VariablePrecisionDateControlFragment\n  }\n  issued {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment CollectionUpdateForm_schemaErrorsFragment on UpdateCollectionPayload {\n  schemaErrors {\n    hint\n    message\n    metadata\n    path\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n\nfragment VariablePrecisionDateControlFragment on VariablePrecisionDate {\n  precision\n  value\n}\n"
  }
};
})();
(node as any).hash = '63dc64d2ba8d7e891af3729c05df92aa';
export default node;
