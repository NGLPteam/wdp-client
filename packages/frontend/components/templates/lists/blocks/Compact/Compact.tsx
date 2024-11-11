import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import List from "../../List";
import SeeAll from "../../SeeAll";
import * as Styled from "./Compact.styles";

export default function CompactListBlock({
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
      <Styled.Grid>
        <Styled.TextColumn>
          {!!title && <Styled.Header>{title}</Styled.Header>}
          <List variant="COMPACT" bgColor={background} data={entityList} />
        </Styled.TextColumn>
        {showHeroImage && <Styled.HeroImage />}
      </Styled.Grid>
      <SeeAll
        alignment="left"
        visible={!!showSeeAllButton}
        buttonLabel={seeAllButtonLabel}
        schema="schema"
      />
    </Styled.Container>
  );
}
