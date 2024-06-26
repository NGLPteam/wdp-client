import NextImage from "next/legacy/image";
type NextImageProps = React.ComponentProps<typeof NextImage>;

function Image(props: Props) {
  // Destructuring props in this component is awkward because the Props type relies on
  // a discriminated union. If we destructure the image and layout props into separate
  // variables, Typescript loses track of the connection between them and our prop types
  // won't be checked correctly.
  const {
    image: { url },
    layout,
    unoptimized,
    ...nextImageProps
  } = props;

  const commonNextImageProps = {
    src: url,
    ...nextImageProps,
  };

  if (layout === "fill") {
    return (
      <NextImage
        layout={layout}
        {...commonNextImageProps}
        alt={props.image.alt || ""}
      />
    );
  } else {
    return (
      <NextImage
        unoptimized={unoptimized || process.env.NODE_ENV !== "production"}
        {...commonNextImageProps}
        layout={layout}
        width={props.image.width}
        height={props.image.height}
        alt={props.image.alt || ""}
      />
    );
  }
}

interface BaseImageProps
  extends Pick<
    NextImageProps,
    "priority" | "quality" | "sizes" | "objectFit" | "objectPosition"
  > {
  className?: string;
  unoptimized?: boolean;
  alt?: string | null;
  style?: React.CSSProperties;
}

interface FillImage {
  alt: string | null;
  url: string;
}

interface DimensionalImage extends FillImage {
  height: number;
  width: number;
}

type Props =
  | (BaseImageProps & { layout: "fill"; image: FillImage })
  | (BaseImageProps & {
      layout?: Exclude<NextImageProps["layout"], "fill">;
      image: DimensionalImage;
    });

export default Image;
