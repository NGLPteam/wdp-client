/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPageUpdateFormFragment = {
    readonly page?: {
        readonly id: string;
        readonly title: string;
        readonly slug: string;
        readonly body: string;
        readonly position: number | null;
        readonly heroImage: {
            readonly " $fragmentRefs": FragmentRefs<"FileUploadFragment">;
        };
    } | null | undefined;
    readonly " $refType": "EntityPageUpdateFormFragment";
};
export type EntityPageUpdateFormFragment$data = EntityPageUpdateFormFragment;
export type EntityPageUpdateFormFragment$key = {
    readonly " $data"?: EntityPageUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityPageUpdateFormFragment">;
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
(node as any).hash = '82f678137bd046988abc897b96202089';
export default node;
