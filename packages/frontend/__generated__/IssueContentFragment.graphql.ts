/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueContentFragment = {
    readonly ordering: {
        readonly " $fragmentRefs": FragmentRefs<"IssueOrderingLayoutFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"IssueSidebarNavFragment">;
    readonly " $refType": "IssueContentFragment";
};
export type IssueContentFragment$data = IssueContentFragment;
export type IssueContentFragment$key = {
    readonly " $data"?: IssueContentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueContentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueContentFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "identifier",
          "value": "articles"
        }
      ],
      "concreteType": "Ordering",
      "kind": "LinkedField",
      "name": "ordering",
      "plural": false,
      "selections": [
        {
          "args": [
            {
              "kind": "Variable",
              "name": "page",
              "variableName": "page"
            }
          ],
          "kind": "FragmentSpread",
          "name": "IssueOrderingLayoutFragment"
        }
      ],
      "storageKey": "ordering(identifier:\"articles\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueSidebarNavFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '4ebef4dbeae41fc89b6ef1c820108a8d';
export default node;
