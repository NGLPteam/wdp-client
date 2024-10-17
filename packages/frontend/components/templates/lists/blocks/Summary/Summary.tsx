import List from "../../List/";
import SeeAll from "../../SeeAll";
import * as Styled from "./Summary.styles";
import type { DescendantsTemplateData } from "@/components/templates/Descendants/Descendants";

export default function SummaryListBlock({
  data,
}: {
  data: DescendantsTemplateData;
}) {
  const { config, slots } = data;
  const { entity } = slots;

  return (
    <Styled.Container bgColor={config.background}>
      <Styled.Grid>
        <Styled.TextColumn>
          {!!config.blockTitle && (
            <Styled.Header>{config.blockTitle}</Styled.Header>
          )}
          <Styled.Entity>
            {entity.context?.valid && (
              <Styled.Context>{entity.context.content}</Styled.Context>
            )}
            {entity.header?.valid && (
              <Styled.EntityHeader>{entity.header.content}</Styled.EntityHeader>
            )}
            {entity.subheader?.valid && (
              <Styled.Subheader>{entity.subheader.content}</Styled.Subheader>
            )}
            {entity.metadata?.valid && (
              <Styled.Metadata>{entity.metadata.content}</Styled.Metadata>
            )}
          </Styled.Entity>
          <List
            items={slots.items}
            variant={config.variant}
            bgColor={config.background}
          />
          <SeeAll alignment="left" {...config.seeAll} />
        </Styled.TextColumn>
        {config.heroImage && <Styled.HeroImage />}
      </Styled.Grid>
    </Styled.Container>
  );
}
