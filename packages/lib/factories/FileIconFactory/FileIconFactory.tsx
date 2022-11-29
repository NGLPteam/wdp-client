import type IconProps from "../../types/icon";
import { Audio32, Image32, Text32, Video32 } from "../../svgs/icons";

export default function FileIconFactory({ kind, ...props }: Props) {
  switch (kind) {
    case "audio":
      return <Audio32 {...props} />;

    case "image":
      return <Image32 {...props} />;

    case "video":
      return <Video32 {...props} />;

    default:
      return <Text32 {...props} />;
  }
}

interface Props extends IconProps {
  kind?: string;
  crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
}
