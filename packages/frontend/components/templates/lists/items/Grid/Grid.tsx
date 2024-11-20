import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import { getRouteByEntityType } from "@/helpers/routes";
import * as Styled from "./Grid.styles";

export default function GridListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, contextC, metaA, metaB } =
    slots ?? {};

  const renderMeta =
    metaA?.valid || metaB?.valid || contextB?.valid || contextC?.valid;

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  return (
    <li>
      <Styled.Link href={href}>
        <CoverImage {...entity} maxWidth={168} maxHeight={248} />
        <Styled.TextContent>
          {contextA?.valid && !!contextA.content && (
            <Styled.ContextOne>
              <InlineSlotWrapper content={contextA.content} />
            </Styled.ContextOne>
          )}
          {header?.valid && !!header.content && (
            <Styled.Header>
              <InlineSlotWrapper content={header.content} />
            </Styled.Header>
          )}
          {subheader?.valid && !!subheader.content && (
            <Styled.Subheader>
              <InlineSlotWrapper content={subheader.content} />
            </Styled.Subheader>
          )}
          <Styled.Contributors>
            <ContributorsList data={entity?.contributions} noLinks />
          </Styled.Contributors>
          {renderMeta && (
            <Styled.Group>
              {metaA?.valid && !!metaA.content && (
                <span>
                  <InlineSlotWrapper content={metaA.content} />
                </span>
              )}
              {metaB?.valid && (
                <span>
                  <InlineSlotWrapper content={metaB.content} />
                </span>
              )}
              {contextB?.valid && !!contextB.content && (
                <span>
                  <InlineSlotWrapper content={contextB.content} />
                </span>
              )}
              {contextC?.valid && !!contextC.content && (
                <span>
                  <InlineSlotWrapper content={contextC.content} />
                </span>
              )}
            </Styled.Group>
          )}
        </Styled.TextContent>
      </Styled.Link>
    </li>
  );
}
