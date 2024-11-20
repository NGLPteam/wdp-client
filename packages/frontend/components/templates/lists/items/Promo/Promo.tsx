import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import * as Styled from "./Promo.styles";

export default function PromoListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, contextA, contextB, metaA, metaB } = slots ?? {};

  const href =
    entity?.__typename === "Item" || entity?.__typename === "Collection"
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  return (
    <Styled.Item>
      <NamedLink href={href}>
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
        </Styled.TextContent>
      </NamedLink>
    </Styled.Item>
  );
}
