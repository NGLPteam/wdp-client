import { usePathname } from "next/navigation";
import { NamedLink, NavMenuLink } from "@/components/atomic";
import { EntityNavListFragment$data } from "@/relay/EntityNavListFragment.graphql";
import Dropdown from "../Dropdown";
import styles from "./PagesList.module.css";

type Page = EntityNavListFragment$data["pages"]["nodes"][number];

export default function PagesList({
  pages,
  basePath,
}: {
  pages: readonly Page[];
  basePath: string;
}) {
  const pathname = usePathname();

  const count = pages.length;

  if (count > 4)
    return (
      <Dropdown<Page>
        label="nav.pages"
        items={pages}
        getItemProps={(item) => ({
          href: `${basePath}/page/${item.slug}`,
          label: item.title,
        })}
      />
    );

  const renderLink = (p: Page, className?: string) => {
    const href = `${basePath}/page/${p.slug}`;

    return (
      <li key={p.slug} className={className}>
        <NamedLink href={href}>
          <NavMenuLink
            as="span"
            aria-current={pathname === href ? "page" : undefined}
          >
            <span className="t-label-sm">{p.title}</span>
          </NavMenuLink>
        </NamedLink>
      </li>
    );
  };

  if (count === 1) return renderLink(pages[0]);

  return (
    <>
      {pages.map((p) => renderLink(p, styles.link))}
      {
        <Dropdown<Page>
          label="nav.pages"
          items={pages}
          getItemProps={(item) => ({
            href: `${basePath}/page/${item.slug}`,
            label: item.title,
          })}
          className={styles.dropdown}
        />
      }
    </>
  );
}
