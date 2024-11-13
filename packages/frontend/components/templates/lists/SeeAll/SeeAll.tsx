import Button from "@/components/atomic/Button";
import NamedLink from "@/components/atomic/links/NamedLink";
import * as Styled from "./SeeAll.styles";

export type SeeAllProps = {
  buttonLabel?: string | null;
  href: string;
  alignment: "center" | "left";
};

export default function SeeAll(props: SeeAllProps) {
  return (
    <Styled.SeeAll $align={props.alignment}>
      <NamedLink href={props.href}>
        <Button as="div">
          <span className="t-capitalize">{props.buttonLabel}</span>
        </Button>
      </NamedLink>
    </Styled.SeeAll>
  );
}
