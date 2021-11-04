/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LinkTargetTypeaheadQueryVariables = {
    slug: string;
    title?: string | null | undefined;
};
export type LinkTargetTypeaheadQueryResponse = {
    readonly collection: {
        readonly linkTargetCandidates: {
            readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadFragment">;
        };
    } | null;
    readonly item: {
        readonly linkTargetCandidates: {
            readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadFragment">;
        };
    } | null;
};
export type LinkTargetTypeaheadQuery = {
    readonly response: LinkTargetTypeaheadQueryResponse;
    readonly variables: LinkTargetTypeaheadQueryVariables;
};



/*
query LinkTargetTypeaheadQuery(
  $slug: Slug!
  $title: String
) {
  collection(slug: $slug) {
    linkTargetCandidates(title: $title) {
      ...LinkTargetTypeaheadFragment
    }
    id
  }
  item(slug: $slug) {
    linkTargetCandidates(title: $title) {
      ...LinkTargetTypeaheadFragment
    }
    id
  }
}

fragment LinkTargetTypeaheadFragment on LinkTargetCandidateConnection {
  edges {
    node {
      targetId
      target {
        __typename
        ... on Collection {
          title
        }
        ... on Item {
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "title",
    "variableName": "title"
  }
],
v3 = [
  {
    "alias": null,
    "args": (v2/*: any*/),
    "concreteType": "LinkTargetCandidateConnection",
    "kind": "LinkedField",
    "name": "linkTargetCandidates",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LinkTargetTypeaheadFragment"
      }
    ],
    "storageKey": null
  }
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": (v2/*: any*/),
    "concreteType": "LinkTargetCandidateConnection",
    "kind": "LinkedField",
    "name": "linkTargetCandidates",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "LinkTargetCandidateEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkTargetCandidate",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "targetId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
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
                    "selections": (v4/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v4/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v5/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LinkTargetTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LinkTargetTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "18301b5ec518593809b8da677dfb179d",
    "id": null,
    "metadata": {},
    "name": "LinkTargetTypeaheadQuery",
    "operationKind": "query",
    "text": "query LinkTargetTypeaheadQuery(\n  $slug: Slug!\n  $title: String\n) {\n  collection(slug: $slug) {\n    linkTargetCandidates(title: $title) {\n      ...LinkTargetTypeaheadFragment\n    }\n    id\n  }\n  item(slug: $slug) {\n    linkTargetCandidates(title: $title) {\n      ...LinkTargetTypeaheadFragment\n    }\n    id\n  }\n}\n\nfragment LinkTargetTypeaheadFragment on LinkTargetCandidateConnection {\n  edges {\n    node {\n      targetId\n      target {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Item {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bc6184d431bf659991e72f9ac20ffbd7';
export default node;
