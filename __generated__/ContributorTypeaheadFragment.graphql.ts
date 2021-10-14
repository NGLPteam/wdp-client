/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorTypeaheadFragment = {
    readonly contributors: {
        readonly nodes: ReadonlyArray<{
            readonly __typename: "OrganizationContributor";
            readonly id: string;
            readonly legalName: string | null;
        } | {
            readonly __typename: "PersonContributor";
            readonly id: string;
            readonly givenName: string | null;
            readonly familyName: string | null;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }>;
    };
    readonly " $refType": "ContributorTypeaheadFragment";
};
export type ContributorTypeaheadFragment$data = ContributorTypeaheadFragment;
export type ContributorTypeaheadFragment$key = {
    readonly " $data"?: ContributorTypeaheadFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorTypeaheadFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorTypeaheadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AnyContributorConnection",
      "kind": "LinkedField",
      "name": "contributors",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "legalName",
                  "storageKey": null
                }
              ],
              "type": "OrganizationContributor",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
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
                }
              ],
              "type": "PersonContributor",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '50e64925e6f215e54f2eb811768a9117';
export default node;
