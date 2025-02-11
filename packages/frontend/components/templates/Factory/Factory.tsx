"use client";

import { graphql, useFragment } from "react-relay";
import { FactoryTemplatesFragment$key } from "@/relay/FactoryTemplatesFragment.graphql";
import { HeroBackground } from "@/types/graphql-schema";
import Descendants from "../Descendants";
import Detail from "../Detail";
import Contributors from "../Contributors";
import Links from "../Links";
import OrderingNavigation from "../OrderingNavigation";
import Pages from "../Pages";
import Blurb from "../Blurb";

const TEMPLATE_COMPONENT_MAP = {
  DESCENDANT_LIST: Descendants,
  DETAIL: Detail,
  CONTRIBUTOR_LIST: Contributors,
  LINK_LIST: Links,
  PAGE_LIST: Pages,
  ORDERING: OrderingNavigation,
  BLURB: Blurb,
  METADATA: null,
  HERO: null,
  LIST_ITEM: null,
  SUPPLEMENTARY: null,
  NAVIGATION: null,
};

export default function TemplateFactory({
  data,
  bgOverride,
}: {
  data: FactoryTemplatesFragment$key | null;
  bgOverride?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  if (
    !template ||
    !template.templateKind ||
    template.templateKind === "%future added value"
  )
    return null;

  const Template = TEMPLATE_COMPONENT_MAP[template.templateKind];

  if (
    (template.templateKind === "DESCENDANT_LIST" ||
      template.templateKind === "LINK_LIST") &&
    template.entityList?.empty
  ) {
    return null;
  }

  return Template ? <Template data={template} bgOverride={bgOverride} /> : null;
}

const fragment = graphql`
  fragment FactoryTemplatesFragment on AnyMainTemplateInstance {
    ... on TemplateInstance {
      templateKind
    }
    ... on ContributorListTemplateInstance {
      ...ContributorsTemplateFragment
    }
    ... on DetailTemplateInstance {
      ...DetailTemplateFragment
    }
    ... on OrderingTemplateInstance {
      ...OrderingNavigationTemplateFragment
    }
    ... on PageListTemplateInstance {
      ...PagesTemplateFragment
    }
    ... on DescendantListTemplateInstance {
      slots {
        blockHeader {
          content
        }
      }
      entityList {
        empty
      }
    }
    ... on LinkListTemplateInstance {
      entityList {
        empty
      }
    }
    ... on BlurbTemplateInstance {
      ...BlurbTemplateFragment
    }
    ...DescendantsTemplateFragment
    ...LinksTemplateFragment
  }
`;
