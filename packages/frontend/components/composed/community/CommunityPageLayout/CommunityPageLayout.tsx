"use client";

import { useFragment } from "react-relay";
import classNames from "classnames";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql } from "react-relay";
import { LoadingBlock, Markdown } from "components/atomic";
import Container from "@/components/layout/Container";
import { CommunityPageLayoutFragment$key } from "@/relay/CommunityPageLayoutFragment.graphql";
import { generateSrcSet, sizes } from "@/helpers/generateSrcSet";
import styles from "./CommunityPageLayout.module.css";

export default function CommunityPageLayout({ data }: Props) {
  const page = useFragment(fragment, data);

  const isMounted = useIsMounted();

  const hero = page?.heroImage?.hero?.webp;

  return page ? (
    <section className="a-bg-custom10">
      {hero?.url && (
        <figure className={classNames("a-bg-custom20", styles.imageWrapper)}>
          <img
            alt={hero.alt ?? ""}
            src={hero.url}
            srcSet={generateSrcSet(page.heroImage)}
            sizes={sizes}
            className={styles.heroImage}
            height={hero?.height ?? 300}
            width={hero?.width ?? 1200}
            decoding="async"
            loading="eager"
          />
        </figure>
      )}
      <Container as="div">
        <div className={classNames("t-rte", styles.content)}>
          <h2>{page.title}</h2>
          {isMounted ? (
            <Markdown.Page>{page.body}</Markdown.Page>
          ) : (
            <div className={classNames("t-rte", styles.loading)}>
              <LoadingBlock />
            </div>
          )}
        </div>
      </Container>
    </section>
  ) : (
    <LoadingBlock className="a-bg-custom10" />
  );
}

interface Props {
  data?: CommunityPageLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityPageLayoutFragment on Page {
    title
    body
    heroImage {
      hero {
        webp {
          url
          alt
          height
          width
        }
      }
      large {
        webp {
          url
          width
        }
      }
      medium {
        webp {
          url
          width
        }
      }
      small {
        webp {
          url
          width
        }
      }
    }
  }
`;
