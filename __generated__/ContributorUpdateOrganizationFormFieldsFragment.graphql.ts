/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateOrganizationFormFieldsFragment = {
    readonly legalName?: string | null;
    readonly email?: string | null;
    readonly location?: string | null;
    readonly bio?: string | null;
    readonly url?: string | null;
    readonly image?: {
        readonly thumb: {
            readonly png: {
                readonly alt: string;
                readonly url: string;
            } | null;
        };
    } | null;
    readonly " $refType": "ContributorUpdateOrganizationFormFieldsFragment";
};
export type ContributorUpdateOrganizationFormFieldsFragment$data = ContributorUpdateOrganizationFormFieldsFragment;
export type ContributorUpdateOrganizationFormFieldsFragment$key = {
    readonly " $data"?: ContributorUpdateOrganizationFormFieldsFragment$data;
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
                    (v0/*: any*/)
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
      "type": "OrganizationContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
})();
(node as any).hash = '24da66935d1ef30a16a46cc8af3a2054';
export default node;
