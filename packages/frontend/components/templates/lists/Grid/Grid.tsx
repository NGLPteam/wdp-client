import CoverImage from "@/components/atomic/images/CoverImage";
import * as Styled from "./Grid.styles";
import type { ListItem } from "../lists.types";

export default function GridListItem({ data }: { data: ListItem }) {
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
    <li>
      <CoverImage
        data={thumbnail}
        maxWidth={225}
        maxHeight={300}
        title={header?.content}
      />
      <Styled.TextContent>
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
        <Styled.Group>
          {metaOne?.valid && <span>{metaOne.content}</span>}
          {metaTwo?.valid && <span>{metaTwo.content}</span>}
          {contextTwo?.valid && <span>{contextTwo.content}</span>}
          {contextThree?.valid && <span>{contextThree.content}</span>}
        </Styled.Group>
      </Styled.TextContent>
    </li>
  );
}
