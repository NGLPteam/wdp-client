/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssuePageLayoutFragment = {
    readonly title: string;
    readonly body: string;
    readonly heroImage: {
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    };
    readonly " $refType": "IssuePageLayoutFragment";
};
export type IssuePageLayoutFragment$data = IssuePageLayoutFragment;
export type IssuePageLayoutFragment$key = {
    readonly " $data"?: IssuePageLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssuePageLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssuePageLayoutFragment",
  "selections": [
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
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContentImageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Page",
  "abstractKey": null
};
(node as any).hash = '044a64635a3daab28cdb1e98db078960';
export default node;
