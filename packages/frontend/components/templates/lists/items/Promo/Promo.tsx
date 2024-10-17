import * as Styled from "./Promo.styles";
import type { ListItem } from "../../lists.types";

export default function PromoListItem({ data }: { data: ListItem }) {
  const { header, contextOne, contextTwo, metaOne, metaTwo, thumbnail } =
    data.slots;
  return (
    <Styled.Item>
      <Styled.TextContent>
        <Styled.Group>
          {contextOne?.valid && <span>{contextOne.content}</span>}
          {contextTwo?.valid && <span>{contextTwo.content}</span>}
        </Styled.Group>
        {header?.valid && <Styled.Header>{header.content}</Styled.Header>}
        <Styled.Group>
          {metaOne?.valid && <span>{metaOne.content}</span>}
          {metaTwo?.valid && <span>{metaTwo.content}</span>}
        </Styled.Group>
      </Styled.TextContent>
    </Styled.Item>
  );
}
