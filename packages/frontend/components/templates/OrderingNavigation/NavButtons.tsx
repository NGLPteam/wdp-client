import { graphql, useFragment } from "react-relay";
import { PrevNextButton } from "components/atomic/Button/patterns";
import { NamedLink } from "components/atomic";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import { NavButtonsFragment$key } from "@/relay/NavButtonsFragment.graphql";
import { hrefFromTypename } from "./routes";
import * as Styled from "./OrderingNavigation.styles";

export default function NavButtons({
  data,
}: {
  data?: NavButtonsFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { orderingPair, slots } = template ?? {};

  const { first, last, nextSibling, prevSibling } = orderingPair ?? {};

  const nextLabel = useSharedInlineFragment(slots?.nextLabel);
  const nextHref = hrefFromTypename(nextSibling);

  const prevLabel = useSharedInlineFragment(slots?.previousLabel);
  const prevHref = hrefFromTypename(prevSibling);

  const nextProps = {
    as: first || !prevHref ? undefined : "span",
    iconLeft: true as const,
    icon: "arrowLeft" as const,
    label: prevLabel?.content ?? "",
    "aria-disabled": first || !prevHref,
  };

  const prevProps = {
    as: last || !nextHref ? undefined : "span",
    icon: "arrowRight" as const,
    label: nextLabel?.content ?? "",
    "aria-disabled": last || !nextHref,
  };

  const maybeWrapLink = (
    props: typeof prevProps | typeof nextProps,
    href: string | null,
  ) =>
    href ? (
      <NamedLink href={href}>
        <PrevNextButton {...props} />
      </NamedLink>
    ) : (
      <PrevNextButton {...props} />
    );

  return (
    <Styled.Inner className="l-container-wide l-flex l-flex--gap">
      {maybeWrapLink(prevProps, prevHref)}
      {maybeWrapLink(nextProps, nextHref)}
    </Styled.Inner>
  );
}

const fragment = graphql`
  fragment NavButtonsFragment on OrderingTemplateInstance {
    orderingPair {
      first
      last
      nextSibling {
        ...routesOrderingTemplateFragment
      }
      prevSibling {
        ...routesOrderingTemplateFragment
      }
    }
    slots {
      nextLabel {
        ...sharedInlineSlotFragment
      }
      previousLabel {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
