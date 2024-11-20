import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import NamedLink from "@/components/atomic/links/NamedLink";
import CoverImage from "@/components/atomic/images/CoverImage";
import { getRouteByEntityType } from "@/helpers/routes";
import SeeAll from "../../SeeAll";
import List from "../../List/";
import * as Styled from "./Summary.styles";

export default function SummaryListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
}) {
  const { linksDefinition, descendantsDefinition, slots, entityList, entity } =
    useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    title,
    showSeeAllButton,
    seeAllButtonLabel,
    selectionMode,
    // showEntityContext,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { header, subtitle, metadata } = slots ?? {};

  const href =
    entity?.__typename === "Item" || entity?.__typename === "Collection"
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

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
            <NamedLink href={href}>
              {header?.valid && !!header.content && (
                <Styled.EntityHeader>{header.content}</Styled.EntityHeader>
              )}
              {subtitle?.valid && !!subtitle.content && (
                <Styled.Subheader>{subtitle.content}</Styled.Subheader>
              )}
            </NamedLink>
            {metadata?.valid && !!metadata.content && (
              <Styled.Metadata>{metadata.content}</Styled.Metadata>
            )}
          </Styled.Entity>
          <List variant="SUMMARY" bgColor={background} data={entityList} />
          {!!showSeeAllButton && selectionMode === "NAMED" && (
            <SeeAll
              alignment="left"
              buttonLabel={seeAllButtonLabel}
              href={`${basePath}/${descendantsDefinition?.orderingIdentifier}`}
            />
          )}
        </Styled.TextColumn>
        {showHeroImage && (
          <Styled.HeroImage>
            <NamedLink href={href}>
              <CoverImage {...entity} maxWidth={168} maxHeight={248} />
            </NamedLink>
          </Styled.HeroImage>
        )}
      </Styled.Grid>
    </Styled.Container>
  );
}
