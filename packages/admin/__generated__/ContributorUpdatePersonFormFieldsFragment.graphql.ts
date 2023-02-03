/**
 * @generated SignedSource<<794fb101d6cf4830cdd23f48de2704f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdatePersonFormFieldsFragment$data = {
  readonly affiliation?: string | null;
  readonly bio?: string | null;
  readonly email?: string | null;
  readonly familyName?: string | null;
  readonly givenName?: string | null;
  readonly image?: {
    readonly " $fragmentSpreads": FragmentRefs<"FileUploadFragment">;
  };
  readonly links?: ReadonlyArray<{
    readonly title: string;
    readonly url: string;
  }>;
  readonly orcid?: string | null;
  readonly title?: string | null;
  readonly " $fragmentType": "ContributorUpdatePersonFormFieldsFragment";
};
export type ContributorUpdatePersonFormFieldsFragment$key = {
  readonly " $data"?: ContributorUpdatePersonFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdatePersonFormFieldsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
            (v0/*: any*/),
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
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
})();

(node as any).hash = "b9e3acbb91341d96ec0c2bcb75e52f10";

export default node;
