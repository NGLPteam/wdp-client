import CoverImage from "@/components/atomic/images/CoverImage";
import * as Styled from "./Card.styles";
import type { ListItem } from "../../lists.types";

export default function CardListItem({ data }: { data: ListItem }) {
  const {
    header,
    subheader,
    contextOne,
    contextTwo,
    contextThree,
    contributors,
    metaOne,
    metaTwo,
    thumbnail,
  } = data.slots;
  return (
    <Styled.Item>
      <Styled.ItemInner>
        <Styled.CoverWrapper>
          <Styled.CoverInner>
            <CoverImage
              title={header?.content}
              data={thumbnail}
              maxWidth={225}
              maxHeight={300}
            />
          </Styled.CoverInner>
        </Styled.CoverWrapper>
        <Styled.TextContent>
          <Styled.TitleBlock>
            {contextOne?.valid && (
              <Styled.ContextOne>{contextOne.content}</Styled.ContextOne>
            )}
            {header?.valid && <Styled.Header>{header.content}</Styled.Header>}
            {subheader?.valid && (
              <Styled.Subheader>{subheader.content}</Styled.Subheader>
            )}
            {contributors?.valid && (
              <Styled.Contributors>{contributors.content}</Styled.Contributors>
            )}
          </Styled.TitleBlock>
          <Styled.Group>
            {metaOne?.valid && <span>{metaOne.content}</span>}
            {metaTwo?.valid && <span>{metaTwo.content}</span>}
          </Styled.Group>
          <Styled.Group>
            {contextTwo?.valid && <span>{contextTwo.content}</span>}
            {contextThree?.valid && <span>{contextThree.content}</span>}
          </Styled.Group>
        </Styled.TextContent>
      </Styled.ItemInner>
    </Styled.Item>
  );
}
