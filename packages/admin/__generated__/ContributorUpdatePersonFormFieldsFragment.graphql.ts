/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorUpdatePersonFormFieldsFragment = {
    readonly givenName?: string | null | undefined;
    readonly familyName?: string | null | undefined;
    readonly title?: string | null | undefined;
    readonly email?: string | null | undefined;
    readonly affiliation?: string | null | undefined;
    readonly bio?: string | null | undefined;
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
    readonly " $refType": "ContributorUpdatePersonFormFieldsFragment";
};
export type ContributorUpdatePersonFormFieldsFragment$data = ContributorUpdatePersonFormFieldsFragment;
export type ContributorUpdatePersonFormFieldsFragment$key = {
    readonly " $data"?: ContributorUpdatePersonFormFieldsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdatePersonFormFieldsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
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
  "name": "ContributorUpdatePersonFormFieldsFragment",
  "selections": [
    {
      "kind": "InlineFragment",
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
        (v0/*: any*/),
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
                    (v1/*: any*/)
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
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
})();
(node as any).hash = '170cc5fe41d32a705cd7b5bf29e0d8af';
export default node;
