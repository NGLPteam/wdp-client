import * as Styled from "./Compact.styles";
import type { ListItem } from "../../lists.types";

export default function CompactListItem({ data }: { data: ListItem }) {
  const { header, contextOne } = data.slots;
  return (
    <Styled.Item>
      {header?.valid && <span>{header.content}</span>}
      {contextOne?.valid && (
        <Styled.ContextOne>{contextOne.content}</Styled.ContextOne>
      )}
    </Styled.Item>
  );
}
