import classNames from "classnames";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ className }: Props) => {
  return (
    <div className={classNames(className, styles.icon)} role="presentation" />
  );
};

interface Props {
  className?: string;
}

export default LoadingSpinner;
