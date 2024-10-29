import Button from "@/components/atomic/Button";
import * as Styled from "./SeeAll.styles";

export type SeeAllProps = {
  visible: boolean;
  buttonLabel?: string | null;
  schema: string | null;
  alignment: "center" | "left";
};

export default function SeeAll(props: SeeAllProps) {
  return props.visible ? (
    <Styled.SeeAll $align={props.alignment}>
      <Button as="div">
        <span className="t-capitalize">{props.buttonLabel}</span>
      </Button>
    </Styled.SeeAll>
  ) : null;
}
