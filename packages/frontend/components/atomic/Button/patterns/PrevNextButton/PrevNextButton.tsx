import { forwardRef } from "react";
import classNames from "classnames";
import Button from "@/components/atomic/Button";
import styles from "./PrevNextButton.module.css";
import type { MaybeButtonRef } from "@castiron/common-types";

const PrevNextButton = forwardRef(
  ({ label, ...props }: Props, ref: MaybeButtonRef) => {
    return (
      <Button
        ref={ref}
        className={classNames("t-capitalize", styles.button)}
        {...props}
      >
        {label}
      </Button>
    );
  },
);

type BaseProps = Omit<React.ComponentProps<typeof Button>, "as">;

type Props = BaseProps & {
  label?: string | React.ReactElement;
  as?: "a" | "div" | "span";
};

export default PrevNextButton;
