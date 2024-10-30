"use client";

import { graphql, useFragment } from "react-relay";
import { FactoryTemplatesFragment$key } from "@/relay/FactoryTemplatesFragment.graphql";
import { FactoryTemplatesEntityFragment$key } from "@/relay/FactoryTemplatesEntityFragment.graphql";
import Descendants from "../Descendants";
import Detail from "../Detail";
import Contributors from "../Contributors";
import Links from "../Links";
import OrderingNavigation from "../OrderingNavigation";
import Pages from "../Pages";

const TEMPLATE_COMPONENT_MAP = {
  DESCENDANT_LIST: Descendants,
  DETAIL: Detail,
  CONTRIBUTOR_LIST: Contributors,
  LINK_LIST: Links,
  PAGE_LIST: Pages,
  ORDERING: OrderingNavigation,
  METADATA: null,
  HERO: null,
  LIST_ITEM: null,
  SUPPLEMENTARY: null,
  NAVIGATION: null,
};

export default function TemplateFactory({
  data,
  entityData,
}: {
  data: FactoryTemplatesFragment$key | null;
  entityData: FactoryTemplatesEntityFragment$key | null;
}) {
  const template = useFragment(fragment, data);
  const entity = useFragment(entityFragment, entityData);

  if (
    !template ||
    !template.templateKind ||
    template.templateKind === "%future added value"
  )
    return null;

  const Template = TEMPLATE_COMPONENT_MAP[template.templateKind];

  return Template ? <Template data={template} entityData={entity} /> : null;
}

const entityFragment = graphql`
  fragment FactoryTemplatesEntityFragment on AnyEntity {
    ...ContributorsTemplateFragment
    ...DetailTemplateEntityFragment
  }
`;

const fragment = graphql`
  fragment FactoryTemplatesFragment on AnyMainTemplateInstance {
    ... on TemplateInstance {
      templateKind
    }
    ... on ContributorListTemplateInstance {
      ...ContributorsTemplateLayoutFragment
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
