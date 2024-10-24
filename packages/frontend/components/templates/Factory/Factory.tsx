"use client";

import { graphql, useFragment } from "react-relay";
import { FactoryTemplatesFragment$key } from "@/relay/FactoryTemplatesFragment.graphql";
import Descendants, {
  type DescendantsTemplateData,
} from "../Descendants/Descendants";
import Detail, { type DetailTemplateData } from "../Detail/Detail";
import Contributors, {
  type ContributorsTemplateData,
} from "../Contributors/Contributors";
import EntityNavigation, {
  type EntityNavigationTemplateData,
} from "../EntityNavigation/EntityNavigation";
import Links, { type LinksTemplateData } from "../Links/Links";
import OrderingNavigation, {
  type OrderingNavigationTemplateData,
} from "../OrderingNavigation/OrderingNavigation";
import Pages, { type PagesTemplateData } from "../Pages/Pages";

type AnyTemplate = (
  | DescendantsTemplateData
  | DetailTemplateData
  | ContributorsTemplateData
  | EntityNavigationTemplateData
  | LinksTemplateData
  | OrderingNavigationTemplateData
  | PagesTemplateData
) & { _typename: string };

// type TemplateData = {
//   hero: HeroTemplateData;
//   templates?: AnyTemplate[];
// };

const TEMPLATE_COMPONENT_MAP = {
  descendants: Descendants,
  detail: Detail,
  contributors: Contributors,
  links: Links,
  pages: Pages,
  entityNavigation: EntityNavigation,
  orderingNavigation: OrderingNavigation,
};

export default function TemplateFactory({
  data,
}: {
  data: FactoryTemplatesFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  if (!template) return null;

  const Template =
    TEMPLATE_COMPONENT_MAP[
      template.__typename as keyof typeof TEMPLATE_COMPONENT_MAP
    ];

  return <Template data={template} />;
}

const fragment = graphql`
  fragment FactoryTemplatesFragment on AnyMainTemplateInstance {
    __typename
    ... on TemplateInstance {
      layoutKind
      templateKind
      lastRenderedAt
    }
    ... on ContributorListTemplateInstance {
      ...ContributorsTemplateFragment
    }
    ... on DescendantListTemplateInstance {
      ...DescendantsTemplateFragment
    }
    ... on DetailTemplateInstance {
      ...DetailTemplateFragment
    }
    ... on LinkListTemplateInstance {
      ...LinksTemplateFragment
    }
    ... on OrderingTemplateInstance {
      ...OrderingNavigationTemplateFragment
    }
    ... on PageListTemplateInstance {
      ...PagesTemplateFragment
    }
  }
`;
