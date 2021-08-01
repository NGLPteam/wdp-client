import React from "react";
import NextImage from "next/image";
type NextImageProps = React.ComponentProps<typeof NextImage>;

function Image(props: Props) {
  // Destructuring props in this component is awkward because the Props type relies on
  // a discriminated union. If we destructure the image and layout props into separate
  // variables, Typescript loses track of the connection between them and our prop types
  // won't be checked correctly.
  const {
    image: { url, alt },
    layout: layoutIgnored,
    ...nextImageProps
  } = props;

  const commonNextImageProps = {
    src: url,
    alt: alt,
    ...nextImageProps,
  };

  if (props.layout === "fill") {
    return <NextImage layout={props.layout} {...commonNextImageProps} />;
  } else {
    return (
      <NextImage
        {...commonNextImageProps}
        layout={props.layout}
        width={props.image.width}
        height={props.image.height}
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
}

interface FillImage {
  alt: string;
  url: string;
}

interface DimensionalImage extends FillImage {
  height: number | string;
  width: number | string;
}

type Props =
  | (BaseImageProps & { layout: "fill"; image: FillImage })
  | (BaseImageProps & {
      layout?: Exclude<NextImageProps["layout"], "fill">;
      image: DimensionalImage;
    });

export default Image;
