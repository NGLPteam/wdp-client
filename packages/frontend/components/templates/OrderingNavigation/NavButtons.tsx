import { graphql, useFragment } from "react-relay";
import { PrevNextButton } from "components/atomic/Button/patterns";
import { NamedLink } from "components/atomic";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import { NavButtonsFragment$key } from "@/relay/NavButtonsFragment.graphql";
import * as Styled from "./OrderingNavigation.styles";

export default function NavButtons({
  data,
  ordering: _ordering,
}: {
  data?: NavButtonsFragment$key | null;
  ordering?: string | null;
}) {
  const slots = useFragment(fragment, data);

  const nextLabel = useSharedInlineFragment(slots?.nextLabel);
  const previousLabel = useSharedInlineFragment(slots?.previousLabel);

  return (
    <Styled.Inner className="l-container-wide l-flex l-flex--gap">
      <NamedLink href={`/collections/[slug]`}>
        <PrevNextButton
          as="span"
          iconLeft
          icon="arrowLeft"
          label={previousLabel?.content ?? "Previous"}
        />
      </NamedLink>
      <NamedLink href={`/collections/[slug]`}>
        <PrevNextButton
          as="span"
          icon="arrowRight"
          label={nextLabel?.content ?? "Next"}
        />
      </NamedLink>
    </Styled.Inner>
  );
}

const fragment = graphql`
  fragment NavButtonsFragment on OrderingTemplateInstanceSlots {
    nextLabel {
      ...sharedInlineSlotFragment
    }
    previousLabel {
      ...sharedInlineSlotFragment
    }
  }
`;
