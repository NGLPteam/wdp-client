/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityPagesListDataFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "EntityPagesListDataFragment";
};
export type EntityPagesListDataFragment$data = EntityPagesListDataFragment;
export type EntityPagesListDataFragment$key = {
    readonly " $data"?: EntityPagesListDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityPagesListDataFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPagesListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Page",
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "PageConnection",
  "abstractKey": null
};
(node as any).hash = 'c055ec06b002d1a8902815314f6b4e3d';
export default node;
