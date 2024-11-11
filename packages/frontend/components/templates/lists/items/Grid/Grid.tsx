import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
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

  return (
    <li>
      <CoverImage {...entity} maxWidth={225} maxHeight={300} />
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
          <ContributorsList data={entity?.contributions} />
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
    </li>
  );
}
