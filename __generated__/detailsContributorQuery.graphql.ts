/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type detailsContributorQueryVariables = {
    slug: string;
};
export type detailsContributorQueryResponse = {
    readonly contributor: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateFormFragment">;
    } | null;
};
export type detailsContributorQuery = {
    readonly response: detailsContributorQueryResponse;
    readonly variables: detailsContributorQueryVariables;
};



/*
query detailsContributorQuery(
  $slug: Slug!
) {
  contributor(slug: $slug) {
    __typename
    ...ContributorUpdateFormFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment ContributorOrganizationFormFragment on OrganizationContributor {
  legalName
  email
  location
  bio
  url
}

fragment ContributorPersonFormFragment on PersonContributor {
  givenName
  familyName
  title
  email
  affiliation
  bio
}

fragment ContributorUpdateFormFragment on AnyContributor {
  __isAnyContributor: __typename
  __typename
  ... on PersonContributor {
    ...ContributorUpdatePersonFormFragment
  }
  ... on OrganizationContributor {
    ...ContributorUpdateOrganizationFormFragment
  }
}

fragment ContributorUpdateOrganizationFormFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on OrganizationContributor {
    contributorId: id
    ...ContributorOrganizationFormFragment
  }
}

fragment ContributorUpdatePersonFormFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on PersonContributor {
    contributorId: id
    ...ContributorPersonFormFragment
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": "contributorId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsContributorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorUpdateFormFragment"
          }
        ],
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
    "name": "detailsContributorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
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
            "kind": "TypeDiscriminator",
            "abstractKey": "__isAnyContributor"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "affiliation",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "type": "PersonContributor",
                    "abstractKey": null
                  }
                ],
                "type": "AnyContributor",
                "abstractKey": "__isAnyContributor"
              }
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "legalName",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "location",
                        "storageKey": null
                      },
                      (v4/*: any*/),
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
                  }
                ],
                "type": "AnyContributor",
                "abstractKey": "__isAnyContributor"
              }
            ],
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df545ddb13a36cf70e5645c33c9d29ed",
    "id": null,
    "metadata": {},
    "name": "detailsContributorQuery",
    "operationKind": "query",
    "text": "query detailsContributorQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ...ContributorUpdateFormFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorOrganizationFormFragment on OrganizationContributor {\n  legalName\n  email\n  location\n  bio\n  url\n}\n\nfragment ContributorPersonFormFragment on PersonContributor {\n  givenName\n  familyName\n  title\n  email\n  affiliation\n  bio\n}\n\nfragment ContributorUpdateFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on PersonContributor {\n    ...ContributorUpdatePersonFormFragment\n  }\n  ... on OrganizationContributor {\n    ...ContributorUpdateOrganizationFormFragment\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    contributorId: id\n    ...ContributorOrganizationFormFragment\n  }\n}\n\nfragment ContributorUpdatePersonFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    contributorId: id\n    ...ContributorPersonFormFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ebb6d4c21458343699a87dd8a2c91b93';
export default node;
