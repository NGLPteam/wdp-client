/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorOrganizationFormFragment = {
    readonly legalName: string | null;
    readonly email: string | null;
    readonly location: string | null;
    readonly bio: string | null;
    readonly url: string | null;
    readonly image: {
        readonly thumb: {
            readonly png: {
                readonly alt: string;
                readonly url: string;
            } | null;
        };
    } | null;
    readonly " $refType": "ContributorOrganizationFormFragment";
};
export type ContributorOrganizationFormFragment$data = ContributorOrganizationFormFragment;
export type ContributorOrganizationFormFragment$key = {
    readonly " $data"?: ContributorOrganizationFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorOrganizationFormFragment">;
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
  "name": "ContributorOrganizationFormFragment",
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
};
})();
(node as any).hash = '7516de92b4b3e58d9bae5bfcd6ea0cfa';
export default node;
