import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import * as Styled from "./Card.styles";

export default function CardListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, contextC, metaA, metaB } =
    slots ?? {};

  const { thumbnail = null, contributors = null } = {};

  return (
    <Styled.Item>
      <Styled.ItemInner>
        <Styled.CoverWrapper>
          <Styled.CoverInner>
            <CoverImage data={thumbnail} maxWidth={225} maxHeight={300} />
          </Styled.CoverInner>
        </Styled.CoverWrapper>
        <Styled.TextContent>
          <Styled.TitleBlock>
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
            {contributors && (
              <Styled.Contributors>{contributors}</Styled.Contributors>
            )}
          </Styled.TitleBlock>
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
          <Styled.Group>
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
        </Styled.TextContent>
      </Styled.ItemInner>
    </Styled.Item>
  );
}
