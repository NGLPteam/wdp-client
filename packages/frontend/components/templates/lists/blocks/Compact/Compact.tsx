import { useSharedListTemplateFragment } from "@/components/templates/shared.graphql";
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
  } = useSharedListTemplateFragment(data);

  const { background, title, showSeeAllButton, seeAllButtonLabel } =
    linksDefinition ?? descendantsDefinition ?? {};

  const showHeroImage = false;

  return (
    <Styled.Container $gap={50} bgColor={background}>
      <Styled.Grid>
        <Styled.TextColumn>
          {!!title && <Styled.Header>{title}</Styled.Header>}
          <List variant="COMPACT" bgColor={background} items={[]} />
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
