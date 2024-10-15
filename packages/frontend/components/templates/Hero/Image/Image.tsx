import { graphql, useFragment } from "react-relay";
import type { HeroImageLayout } from "@/types/graphql-schema";
import { ImageHeroTemplateFragment$key } from "@/relay/ImageHeroTemplateFragment.graphql";
import * as Styled from "./Image.styles";

export default function HeroImage({
  data,
  layout,
}: {
  data: ImageHeroTemplateFragment$key | null;
  layout?: HeroImageLayout;
}) {
  const heroImage = useFragment(fragment, data);

  const src = heroImage?.hero?.webp?.url;

  const Wrapper = layout ? Styled.GridWrapper : Styled.Wrapper;

  return src ? (
    <Wrapper $layout={layout}>
      <Styled.Image
        alt=""
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        {...(heroImage.thumb?.webp?.url && {
          placeholder: "blur",
          blurDataURL: heroImage.thumb.webp.url,
        })}
        $layout={layout}
      />
    </Wrapper>
  ) : null;
}

const fragment = graphql`
  fragment ImageHeroTemplateFragment on ImageAttachment {
    storage
    hero {
      webp {
        url
        width
        height
      }
    }
    thumb {
      webp {
        url
      }
    }
  }
`;
