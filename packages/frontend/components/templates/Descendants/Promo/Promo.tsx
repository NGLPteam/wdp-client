import List from "../../lists/List/";
import SeeAll from "../SeeAll";
import * as Styled from "./Promo.styles";
import type { DescendantsTemplateData } from "../Descendants";

export default function PromoListBlock({
  data,
}: {
  data: DescendantsTemplateData;
}) {
  const { config, slots } = data;

  return (
    <Styled.Container $gap={36} bgColor={config.background}>
      {!!config.blockTitle && <h3>{config.blockTitle}</h3>}
      {config.heroImage && <Styled.HeroImage />}
      <List
        items={slots.items}
        variant={config.variant}
        bgColor={config.background}
      />
      <SeeAll alignment="left" {...config.seeAll} />
    </Styled.Container>
  );
}
