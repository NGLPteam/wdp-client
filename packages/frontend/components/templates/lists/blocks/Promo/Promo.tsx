import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
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
    entityList,
  } = useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const { background, title, showSeeAllButton, seeAllButtonLabel } =
    linksDefinition ?? descendantsDefinition ?? {};

  const showHeroImage = false;

  return (
    <Styled.Container $gap={36} bgColor={background}>
      {!!title && <h3>{title}</h3>}
      {showHeroImage && <Styled.HeroImage />}
      <List variant="PROMOS" bgColor={background} data={entityList} />
      <SeeAll
        alignment="left"
        visible={!!showSeeAllButton}
        buttonLabel={seeAllButtonLabel}
        schema="schema"
      />
    </Styled.Container>
  );
}
