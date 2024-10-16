import CoverImage from "@/components/atomic/images/CoverImage";
import * as Styled from "./Summary.styles";
import type { ListItem } from "../lists.types";

export default function SummaryListItem({ data }: { data: ListItem }) {
  const {
    header,
    subheader,
    contextOne,
    contextTwo,
    summary,
    contributors,
    metaOne,
    metaTwo,
    thumbnail,
  } = data.slots;
  return (
    <Styled.Item>
      <Styled.CoverImage>
        <CoverImage
          title={header?.content}
          data={thumbnail}
          maxWidth={120}
          maxHeight={160}
        />
      </Styled.CoverImage>
      <Styled.TextContent>
        <Styled.Group>
          {contextOne?.valid && <span>{contextOne.content}</span>}
          {contextTwo?.valid && <span>{contextTwo.content}</span>}
        </Styled.Group>
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
        </Styled.Group>
        <Styled.Summary>
          {summary?.valid && <p>{summary.content}</p>}
        </Styled.Summary>
      </Styled.TextContent>
    </Styled.Item>
  );
}
