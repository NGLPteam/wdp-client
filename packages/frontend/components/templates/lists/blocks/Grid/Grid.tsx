import { useSharedListTemplateFragment } from "@/components/templates/shared.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import List from "../../List/";
import SeeAll from "../../SeeAll";
import * as Styled from "./Grid.styles";

export default function GridListBlock({
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
    <Styled.Container $gap={50} bgColor={background}>
      {showHeroImage && <Styled.HeroImage />}
      {!!title && <h3>{title}</h3>}
      <List variant="GRID" bgColor={background} data={entityList} />
      <SeeAll
        alignment="center"
        visible={!!showSeeAllButton}
        buttonLabel={seeAllButtonLabel}
        schema="schema"
      />
    </Styled.Container>
  );
}
