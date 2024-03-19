import LoadingSkeleton from "../LoadingSkeleton.styles";
import { Wrapper } from "./FormField.styles";

export default function FormFieldSkeleton() {
  return (
    <Wrapper className="a-input">
      <LoadingSkeleton />
    </Wrapper>
  );
}
