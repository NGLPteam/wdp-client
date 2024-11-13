import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import SeeAll from "../../SeeAll";
import List from "../../List";
import * as Styled from "./Card.styles";

export default function CardListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key;
  basePath?: string | null;
}) {
  const { linksDefinition, descendantsDefinition, entityList } =
    useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    title,
    showSeeAllButton,
    seeAllButtonLabel,
    selectionMode,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const showHeroImage = false;

  const bgClass = getBgClass(background);

  return (
    <Styled.Wrapper className={bgClass}>
      {!!title && <Styled.Header>{title}</Styled.Header>}
      {showHeroImage && <Styled.HeroImage />}
      <List variant="CARDS" bgColor={background} data={entityList} />
      {!!showSeeAllButton && selectionMode === "NAMED" && (
        <SeeAll
          alignment="center"
          buttonLabel={seeAllButtonLabel}
          href={`${basePath}/${descendantsDefinition?.orderingIdentifier}`}
        />
      )}
    </Styled.Wrapper>
  );
}
