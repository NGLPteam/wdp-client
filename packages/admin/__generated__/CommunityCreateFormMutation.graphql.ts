/**
 * @generated SignedSource<<458cb5dbf220235b13fafc968d49674a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
export type UploadStorage = "CACHE" | "%future added value";
export type CreateCommunityInput = {
  clientMutationId?: string | null;
  heroImage?: UploadedFileInput | null;
  heroImageLayout: HeroImageLayout;
  heroImageMetadata?: ImageMetadataInput | null;
  logo?: UploadedFileInput | null;
  logoMetadata?: ImageMetadataInput | null;
  position?: number | null;
  schemaVersionSlug?: string | null;
  subtitle?: string | null;
  summary?: string | null;
  tagline?: string | null;
  thumbnail?: UploadedFileInput | null;
  thumbnailMetadata?: ImageMetadataInput | null;
  title: string;
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
export type CommunityCreateFormMutation$variables = {
  input: CreateCommunityInput;
};
export type CommunityCreateFormMutation$data = {
  readonly createCommunity: {
    readonly community: {
      readonly title: string;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null;
};
export type CommunityCreateFormMutation = {
  response: CommunityCreateFormMutation$data;
  variables: CommunityCreateFormMutation$variables;
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
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
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
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v3/*: any*/),
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
    "name": "CommunityCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommunityPayload",
        "kind": "LinkedField",
        "name": "createCommunity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "name": "CommunityCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommunityPayload",
        "kind": "LinkedField",
        "name": "createCommunity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
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
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7a98bd4e1f6ea76ce22fb06dbe64573e",
    "id": null,
    "metadata": {},
    "name": "CommunityCreateFormMutation",
    "operationKind": "mutation",
    "text": "mutation CommunityCreateFormMutation(\n  $input: CreateCommunityInput!\n) {\n  createCommunity(input: $input) {\n    community {\n      title\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "06c828fda5a58d8b3cd4ee9283e5709b";

export default node;
