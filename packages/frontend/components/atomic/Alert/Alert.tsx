import classNames from "classnames";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Alert.module.css";

type Props = {
  color?: "red" | "blue" | "green";
  message: string;
  icon?: boolean;
  badge?: boolean;
};

export default function Alert({ color = "red", message, icon, badge }: Props) {
  return (
    <div
      className={classNames("alert", styles.wrapper, {
        [styles["wrapper--badge"]]: badge,
        [styles["wrapper--blue"]]: color === "blue",
        [styles["wrapper--green"]]: color === "green",
      })}
    >
      {icon && <IconFactory icon="alertTriangle24" role="presentation" />}
      <span className="t-copy">{message}</span>
    </div>
  );
}
