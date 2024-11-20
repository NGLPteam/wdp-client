import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import * as Styled from "./Summary.styles";

export default function SummaryListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, metaA, metaB, description } =
    slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  return (
    <Styled.Item>
      <Styled.CoverImage>
        <CoverImage {...entity} maxWidth={120} maxHeight={160} />
      </Styled.CoverImage>
      <Styled.TextContent>
        <Styled.Group>
          {contextA?.valid && !!contextA.content && (
            <span>
              <InlineSlotWrapper content={contextA.content} />
            </span>
          )}
          {contextB?.valid && !!contextB.content && (
            <span>
              <InlineSlotWrapper content={contextB.content} />
            </span>
          )}
        </Styled.Group>
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
        {entity?.contributions && (
          <Styled.Contributors>
            <ContributorsList data={entity.contributions} />
          </Styled.Contributors>
        )}
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
        </Styled.Group>
        {description?.valid && !!description.content && (
          <Styled.Summary>
            <BlockSlotWrapper content={description.content} />
          </Styled.Summary>
        )}
        {href && (
          <NamedLink href={href}>
            <Styled.ReadMore />
          </NamedLink>
        )}
      </Styled.TextContent>
    </Styled.Item>
  );
}
