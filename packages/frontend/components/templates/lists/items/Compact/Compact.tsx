import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import * as Styled from "./Compact.styles";

export default function CompactListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, contextA } = slots ?? {};

  const href =
    entity?.__typename === "Item" || entity?.__typename === "Collection"
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  return (
    <Styled.Item>
      <NamedLink href={href}>
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
      </NamedLink>
    </Styled.Item>
  );
}
