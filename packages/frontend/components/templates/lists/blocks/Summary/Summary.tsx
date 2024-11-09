import { useSharedListTemplateFragment } from "@/components/templates/shared.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import List from "../../List/";
import SeeAll from "../../SeeAll";
import * as Styled from "./Summary.styles";

export default function SummaryListBlock({
  data,
}: {
  data?: sharedListTemplateFragment$key | null;
}) {
  const { linksDefinition, descendantsDefinition, slots, entityList } =
    useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    title,
    showSeeAllButton,
    seeAllButtonLabel,
    // showEntityContext,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { header, subtitle, metadata } = slots ?? {};

  const showHeroImage = false;

  return (
    <Styled.Container bgColor={background}>
      <Styled.Grid>
        <Styled.TextColumn>
          {!!title && <Styled.Header>{title}</Styled.Header>}
          <Styled.Entity>
            {/*{showEntityContext && context?.valid && (
              <Styled.Context>{context.content}</Styled.Context>
            )}*/}
            {header?.valid && !!header.content && (
              <Styled.EntityHeader>{header.content}</Styled.EntityHeader>
            )}
            {subtitle?.valid && !!subtitle.content && (
              <Styled.Subheader>{subtitle.content}</Styled.Subheader>
            )}
            {metadata?.valid && !!metadata.content && (
              <Styled.Metadata>{metadata.content}</Styled.Metadata>
            )}
          </Styled.Entity>
          <List variant="SUMMARY" bgColor={background} data={entityList} />
          <SeeAll
            alignment="left"
            visible={!!showSeeAllButton}
            buttonLabel={seeAllButtonLabel}
            schema="schema"
          />
        </Styled.TextColumn>
        {showHeroImage && <Styled.HeroImage />}
      </Styled.Grid>
    </Styled.Container>
  );
}
