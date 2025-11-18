/**
 * @generated SignedSource<<3a47f8fa2be3068cfc76a6ff0848b42e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateOrganizationFormFieldsFragment$data = {
  readonly bio?: string | null | undefined;
  readonly email?: string | null | undefined;
  readonly image?: {
    readonly " $fragmentSpreads": FragmentRefs<"FileUploadFragment">;
  };
  readonly legalName?: string | null | undefined;
  readonly links?: ReadonlyArray<{
    readonly title: string;
    readonly url: string;
  }>;
  readonly location?: string | null | undefined;
  readonly orcid?: string | null | undefined;
  readonly url?: string | null | undefined;
  readonly " $fragmentType": "ContributorUpdateOrganizationFormFieldsFragment";
};
export type ContributorUpdateOrganizationFormFieldsFragment$key = {
  readonly " $data"?: ContributorUpdateOrganizationFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdateOrganizationFormFieldsFragment">;
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
          "kind": "ScalarField",
          "name": "orcid",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "FileUploadFragment"
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
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
})();

(node as any).hash = "409d51807326ec7fcc9e54a10aba68fb";

export default node;
