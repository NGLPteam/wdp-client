import { useFragment } from "react-relay";
import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import { templateSlotBlockFragment } from "@/components/templates/shared.graphql";
import { sharedBlockSlotFragment$key } from "@/relay/sharedBlockSlotFragment.graphql";
import * as Styled from "./Header.styles";

export default function Sidebar({
  data,
}: {
  data?: sharedBlockSlotFragment$key | null;
}) {
  const sidebar = useFragment(templateSlotBlockFragment, data);

  return sidebar?.valid ? (
    <Styled.Right>
      {sidebar?.content && (
        <Styled.Wrapper {...maybeHtml(sidebar.content)}>
          {maybeReactNode(sidebar.content)}
        </Styled.Wrapper>
      )}
    </Styled.Right>
  ) : null;
}
