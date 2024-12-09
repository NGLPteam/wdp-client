import classNames from "classnames";
import Button from "@/components/atomic/Button";
import NamedLink from "@/components/atomic/links/NamedLink";
import styles from "./SeeAll.module.css";

export type SeeAllProps = {
  buttonLabel?: string | null;
  href: string;
  alignment: "center" | "left";
};

export default function SeeAll(props: SeeAllProps) {
  return (
    <div
      className={classNames("see-all-button", styles.seeAll, {
        [styles["seeAll--left"]]: props.alignment === "left",
      })}
    >
      <NamedLink href={props.href}>
        <Button as="div">
          <span className="t-capitalize">{props.buttonLabel}</span>
        </Button>
      </NamedLink>
    </div>
  );
}
