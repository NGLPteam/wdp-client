import List from "../../lists/List/";
import SeeAll from "../SeeAll";
import * as Styled from "./Grid.styles";
import type { DescendantsTemplateData } from "../Descendants";

export default function GridListBlock({
  data,
}: {
  data: DescendantsTemplateData;
}) {
  const { config, slots } = data;

  return (
    <Styled.Container $gap={50} bgColor={config.background}>
      {config.heroImage && <Styled.HeroImage />}
      {!!config.blockTitle && <h3>{config.blockTitle}</h3>}
      <List
        items={slots.items}
        variant={config.variant}
        bgColor={config.background}
      />
      <SeeAll alignment="center" {...config.seeAll} />
    </Styled.Container>
  );
}
