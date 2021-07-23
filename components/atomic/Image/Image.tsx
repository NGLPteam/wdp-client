import NextImage from "next/image";
import { PreviewImage } from "types/graphql-schema";
type NextImageProps = React.ComponentProps<typeof NextImage>;

function Image({
  className,
  image,
  layout = "intrinsic",
  priority = false,
  quality = 50,
  ...props
}: Props) {
  if (!image?.url) return null;

  const { url, alt, width, height } = image;

  // next/image won't accept width/height values if layout === "fill"
  const dimensionProps =
    layout !== "fill" ? { width, height, layout } : { width, height };

  // Due to next/image's strict typing, we can't spread props like we expect.
  // We need to explicitly return either layout=fill or width/height
  // https://stackoverflow.com/questions/68148204/types-of-property-src-are-incompatible-in-nextjs-image
  // Spreading these props results in a 'src' type error:
  // const dimensionProps = layout !== "fill" ? { width, height, layout } : { layout };

  return layout === "fill" ? (
    <NextImage
      src={url}
      alt={alt}
      layout={layout}
      priority={priority}
      quality={quality}
      className={className}
      {...props}
    />
  ) : (
    <NextImage
      src={url}
      alt={alt}
      priority={priority}
      quality={quality}
      className={className}
      {...dimensionProps}
      {...props}
    />
  );
}

// We need to pick exactly which props we want to pass to next/image
// due to next/image's strict typing
interface Props
  extends Pick<
    NextImageProps,
    "layout" | "priority" | "quality" | "sizes" | "objectFit" | "objectPosition"
  > {
  image?: Partial<PreviewImage>;
  className?: string;
}

export default Image;
