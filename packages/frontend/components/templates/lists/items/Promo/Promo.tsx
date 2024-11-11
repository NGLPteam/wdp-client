import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import * as Styled from "./Promo.styles";

export default function PromoListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots } = useSharedListItemTemplateFragment(data);

  const { header, contextA, contextB, metaA, metaB } = slots ?? {};

  return (
    <Styled.Item>
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
    </Styled.Item>
  );
}
