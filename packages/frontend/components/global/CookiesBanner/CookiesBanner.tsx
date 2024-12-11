import classNames from "classnames";
import { Button } from "../../atomic";
import styles from "./CookiesBanner.module.css";

export default function CookiesBanner({ onAccept, onClose }: Props) {
  return (
    <div className={classNames("a-bg-custom20", styles.banner)} role="alert">
      <div className={classNames("l-container-wide", styles.content)}>
        <p className="t-copy-sm">
          Cookies are delicious. Vitae pharetra maecenas amet eu luctus
          convallis. Feugiat pulvinar eleifend eu fames accumsan, ipsum diam.
        </p>
        <div className={classNames("l-flex", styles.buttons)}>
          <Button size="sm" onClick={onAccept}>
            Accept
          </Button>
          <Button size="sm" secondary icon="close" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  onAccept: () => void;
  onClose: () => void;
};
