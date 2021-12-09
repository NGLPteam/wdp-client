/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateOrganizationFormFieldsFragment = {
    readonly legalName?: string | null | undefined;
    readonly email?: string | null | undefined;
    readonly location?: string | null | undefined;
    readonly bio?: string | null | undefined;
    readonly url?: string | null | undefined;
    readonly image?: {
        readonly thumb: {
            readonly png: {
                readonly alt: string | null;
                readonly url: string | null;
            };
        };
    } | undefined;
    readonly links?: ReadonlyArray<{
        readonly title: string;
        readonly url: string;
    }> | undefined;
    readonly " $refType": "ContributorUpdateOrganizationFormFieldsFragment";
};
export type ContributorUpdateOrganizationFormFieldsFragment$data = ContributorUpdateOrganizationFormFieldsFragment;
export type ContributorUpdateOrganizationFormFieldsFragment$key = {
    readonly " $data"?: ContributorUpdateOrganizationFormFieldsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateOrganizationFormFieldsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorUpdateOrganizationFormFieldsFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "legalName",
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
          "name": "location",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bio",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
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
                    (v0/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ContributorLink",
          "kind": "LinkedField",
          "name": "links",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
})();
(node as any).hash = '2c290ddd7095478c12d8a3b99579d7d2';
export default node;
