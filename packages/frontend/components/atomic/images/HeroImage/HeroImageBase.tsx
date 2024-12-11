import Image from "next/legacy/image";
import classNames from "classnames";
import styles from "./HeroImage.module.css";

type ImageProps = React.ComponentProps<typeof Image>;

export default function HeroImageBase({ alt, url, ...imageProps }: BaseProps) {
  return url ? (
    <div className={classNames("a-bg-custom20", styles.wrapper)}>
      <Image
        alt={alt || ""}
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        {...imageProps}
      />
    </div>
  ) : null;
}

interface BaseProps extends Pick<ImageProps, "placeholder" | "blurDataURL"> {
  alt?: string | null;
  url: string | null;
}
