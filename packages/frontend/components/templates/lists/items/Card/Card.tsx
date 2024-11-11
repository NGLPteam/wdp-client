import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import * as Styled from "./Card.styles";

export default function CardListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, contextC, metaA, metaB } =
    slots ?? {};

  return (
    <Styled.Item>
      <Styled.ItemInner>
        <Styled.CoverWrapper>
          <Styled.CoverInner>
            <CoverImage {...entity} maxWidth={225} maxHeight={300} />
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
            <Styled.Contributors>
              <ContributorsList data={entity?.contributions} />
            </Styled.Contributors>
          </Styled.TitleBlock>
          {(metaA?.valid || metaB?.valid) && (
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
          )}
          {(contextB?.valid || contextC?.valid) && (
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
          )}
        </Styled.TextContent>
      </Styled.ItemInner>
    </Styled.Item>
  );
}
