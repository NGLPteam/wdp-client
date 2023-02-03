/**
 * @generated SignedSource<<79c52dde9de69235a28b3ea180e57618>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageUpdateFormFragment$data = {
  readonly page?: {
    readonly body: string;
    readonly heroImage: {
      readonly " $fragmentSpreads": FragmentRefs<"FileUploadFragment">;
    };
    readonly id: string;
    readonly position: number | null;
    readonly slug: string;
    readonly title: string;
  } | null;
  readonly " $fragmentType": "EntityPageUpdateFormFragment";
};
export type EntityPageUpdateFormFragment$key = {
  readonly " $data"?: EntityPageUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPageUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "pageSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPageUpdateFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "slug",
              "variableName": "pageSlug"
            }
          ],
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
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
              "name": "title",
              "storageKey": null
            },
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
              "name": "body",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "position",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageAttachment",
              "kind": "LinkedField",
              "name": "heroImage",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FileUploadFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "82f678137bd046988abc897b96202089";

export default node;
