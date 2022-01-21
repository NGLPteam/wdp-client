/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type InstanceCommunitySummaryFragment = {
    readonly slug: string;
    readonly title: string;
    readonly tagline: string | null;
    readonly summary: string | null;
    readonly schemaRanks: ReadonlyArray<{
        readonly slug: string;
        readonly name: string;
        readonly count: number;
    }>;
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly large: {
            readonly webp: {
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly logo: {
        readonly storage: AttachmentStorage | null;
        readonly original: {
            readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
        };
    };
    readonly " $refType": "InstanceCommunitySummaryFragment";
};
export type InstanceCommunitySummaryFragment$data = InstanceCommunitySummaryFragment;
export type InstanceCommunitySummaryFragment$key = {
    readonly " $data"?: InstanceCommunitySummaryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstanceCommunitySummaryFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ImageFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstanceCommunitySummaryFragment",
  "selections": [
    (v0/*: any*/),
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
      "name": "tagline",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HierarchicalSchemaRank",
      "kind": "LinkedField",
      "name": "schemaRanks",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        }
      ],
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
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "large",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": (v2/*: any*/),
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
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "logo",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageOriginal",
          "kind": "LinkedField",
          "name": "original",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
})();
(node as any).hash = 'ad480d76ff879209eac700fd6db1cde1';
export default node;
