import { useSharedListTemplateFragment } from "@/components/templates/shared.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import List from "../../List";
import SeeAll from "../../SeeAll";
import * as Styled from "./Promo.styles";

export default function PromoListBlock({
  data,
}: {
  data?: sharedListTemplateFragment$key | null;
}) {
  const {
    linksDefinition,
    descendantsDefinition,
    slots: _slots,
  } = useSharedListTemplateFragment(data);

  const { background, title, showSeeAllButton, seeAllButtonLabel } =
    linksDefinition ?? descendantsDefinition ?? {};

  const showHeroImage = false;

  return (
    <Styled.Container $gap={36} bgColor={background}>
      {!!title && <h3>{title}</h3>}
      {showHeroImage && <Styled.HeroImage />}
      <List variant="PROMOS" bgColor={background} items={[]} />
      <SeeAll
        alignment="left"
        visible={!!showSeeAllButton}
        buttonLabel={seeAllButtonLabel}
        schema="schema"
      />
    </Styled.Container>
  );
}
