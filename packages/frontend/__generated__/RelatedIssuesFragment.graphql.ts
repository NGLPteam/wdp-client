/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RelatedIssuesFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"RelatedIssueBlockFragment">;
        };
    }>;
    readonly " $refType": "RelatedIssuesFragment";
};
export type RelatedIssuesFragment$data = RelatedIssuesFragment;
export type RelatedIssuesFragment$key = {
    readonly " $data"?: RelatedIssuesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RelatedIssuesFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedIssuesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RelatedIssueBlockFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = '80fbbad0a6238fe6288e3412f206ef56';
export default node;
