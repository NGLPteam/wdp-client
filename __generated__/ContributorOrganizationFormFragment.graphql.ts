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
    readonly " $refType": "ContributorOrganizationFormFragment";
};
export type ContributorOrganizationFormFragment$data = ContributorOrganizationFormFragment;
export type ContributorOrganizationFormFragment$key = {
    readonly " $data"?: ContributorOrganizationFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorOrganizationFormFragment">;
};



const node: ReaderFragment = {
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
};
(node as any).hash = '772f513975b4aaf329145089e00689a6';
export default node;
