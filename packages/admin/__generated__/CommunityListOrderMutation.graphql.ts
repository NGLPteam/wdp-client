/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdateCommunityInput = {
    communityId: string;
    position?: number | null | undefined;
    title: string;
    subtitle?: string | null | undefined;
    summary?: string | null | undefined;
    heroImage?: UploadedFileInput | null | undefined;
    heroImageMetadata?: ImageMetadataInput | null | undefined;
    thumbnail?: UploadedFileInput | null | undefined;
    thumbnailMetadata?: ImageMetadataInput | null | undefined;
    clearHeroImage?: boolean | null | undefined;
    clearThumbnail?: boolean | null | undefined;
    schemaProperties?: unknown | null | undefined;
    heroImageLayout: HeroImageLayout;
    tagline?: string | null | undefined;
    logo?: UploadedFileInput | null | undefined;
    logoMetadata?: ImageMetadataInput | null | undefined;
    clearLogo?: boolean | null | undefined;
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
export type CommunityListOrderMutationVariables = {
    input: UpdateCommunityInput;
};
export type CommunityListOrderMutationResponse = {
    readonly updateCommunity: {
        readonly community: {
            readonly id: string;
            readonly position: number | null;
        } | null;
    } | null;
};
export type CommunityListOrderMutation = {
    readonly response: CommunityListOrderMutationResponse;
    readonly variables: CommunityListOrderMutationVariables;
};



/*
mutation CommunityListOrderMutation(
  $input: UpdateCommunityInput!
) {
  updateCommunity(input: $input) {
    community {
      id
      position
    }
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCommunityPayload",
    "kind": "LinkedField",
    "name": "updateCommunity",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "position",
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
    "name": "CommunityListOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunityListOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6cd58dcd431e793746afcfba90280297",
    "id": null,
    "metadata": {},
    "name": "CommunityListOrderMutation",
    "operationKind": "mutation",
    "text": "mutation CommunityListOrderMutation(\n  $input: UpdateCommunityInput!\n) {\n  updateCommunity(input: $input) {\n    community {\n      id\n      position\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b281f7a82916e901ad37f8e0ee624154';
export default node;
