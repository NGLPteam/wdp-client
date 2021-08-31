/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorPersonFormFragment = {
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly title: string | null;
    readonly email: string | null;
    readonly affiliation: string | null;
    readonly bio: string | null;
    readonly image: {
        readonly thumb: {
            readonly png: {
                readonly alt: string;
                readonly url: string;
            } | null;
        };
    } | null;
    readonly " $refType": "ContributorPersonFormFragment";
};
export type ContributorPersonFormFragment$data = ContributorPersonFormFragment;
export type ContributorPersonFormFragment$key = {
    readonly " $data"?: ContributorPersonFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorPersonFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorPersonFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "givenName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
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
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetPreview",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImageMap",
          "kind": "LinkedField",
          "name": "thumb",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PreviewImage",
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
      "storageKey": null
    }
  ],
  "type": "PersonContributor",
  "abstractKey": null
};
(node as any).hash = '1604161d2ccef90948dd02d53425dece';
export default node;
