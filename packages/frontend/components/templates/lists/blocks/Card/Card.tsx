import List from "../../List";
import SeeAll from "../../SeeAll";
import * as Styled from "./Card.styles";
import type { DescendantsTemplateData } from "@/components/templates/Descendants/Descendants";

const BG_COLOR_MAP = {
  none: "a-bg-custom00",
  light: "a-bg-custom10",
  dark: "a-bg-neutral90",
};

export default function CardListBlock({
  data,
}: {
  data: DescendantsTemplateData;
}) {
  const { config, slots } = data;

  const bgClass = config.background
    ? BG_COLOR_MAP[config.background]
    : undefined;

  return (
    <Styled.Wrapper className={bgClass}>
      {!!config.blockTitle && (
        <Styled.Header>{config.blockTitle}</Styled.Header>
      )}
      {config.heroImage && <Styled.HeroImage />}
      <List
        items={slots.items}
        variant={config.variant}
        bgColor={config.background}
      />
      <SeeAll alignment="center" {...config.seeAll} />
    </Styled.Wrapper>
  );
}
