import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import * as Styled from "./Compact.styles";

export default function CompactListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots } = useSharedListItemTemplateFragment(data);

  const { header, contextA } = slots ?? {};

  return (
    <Styled.Item>
      {header?.valid && !!header.content && (
        <span>
          <InlineSlotWrapper content={header.content} />
        </span>
      )}
      {contextA?.valid && !!contextA.content && (
        <Styled.ContextOne>
          <InlineSlotWrapper content={contextA.content} />
        </Styled.ContextOne>
      )}
    </Styled.Item>
  );
}
