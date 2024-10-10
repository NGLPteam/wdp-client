import Hero,  { type HeroTemplateData } from "../Hero/Hero";
import Descendants, { type DescendantsTemplateData } from "../Descendants/Descendants";
import Detail, { type DetailTemplateData } from "../Detail/Detail";
import Contributors, { type ContributorsTemplateData } from "../Contributors/Contributors";
import EntityNavigation, { type EntityNavigationTemplateData } from "../EntityNavigation/EntityNavigation";
import Links, { type LinksTemplateData } from "../Links/Links";
import OrderingNavigation, { type OrderingNavigationTemplateData } from "../OrderingNavigation/OrderingNavigation";
import Pages, { type PagesTemplateData } from "../Pages/Pages";

type AnyTemplate = (DescendantsTemplateData | DetailTemplateData | ContributorsTemplateData | EntityNavigationTemplateData | LinksTemplateData | OrderingNavigationTemplateData | PagesTemplateData) & {_typename: string};

type TemplateData = {
  hero: HeroTemplateData;
  templates: AnyTemplate[];
}

const TEMPLATE_COMPONENT_MAP = {
  descendants: Descendants,
  detail: Detail,
  contributors: Contributors,
  links: Links,
  pages: Pages,
  entityNavigation: EntityNavigation,
  orderingNavigation: OrderingNavigation
}

export default function TemplateLayoutFactory(data: TemplateData) {
  return (
    <>
    <Hero {...data.hero} />
    {
      !!data.templates.length && data.templates.map(t => {
        const Template = TEMPLATE_COMPONENT_MAP[t._typename as keyof typeof TEMPLATE_COMPONENT_MAP]

        return <Template {...t}/>
      })
        }
    </>
  )
}
