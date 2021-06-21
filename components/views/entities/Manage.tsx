import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import { SidebarNav } from "components/atomic";
import { Properties } from "./";

const LINKS = [
  {
    subview: "properties",
    label: "Properties",
  },
  {
    subview: "order",
    label: "Order",
  },
  {
    subview: "links",
    label: "Links",
  },
  {
    subview: "access",
    label: "Access",
  },
  {
    subview: "pages",
    label: "Pages",
  },
  {
    subview: "contributions",
    label: "Contributions",
  },
  {
    subview: "files",
    label: "Files",
  },
];

export default function Manage() {
  const {
    activeEntity: entity,
    activeId: id,
    activeView: view,
    activeSubview: subview,
  } = useGlobalData();

  return (
    <section className="l-grid">
      <SidebarNav className="l-grid__item l-grid__item--3">
        {LINKS.map(({ subview, label }) => (
          <Link
            key={subview}
            href={`/${entity}/${id}/${view}/${subview}`}
            passHref
          >
            <SidebarNav.Link>{label}</SidebarNav.Link>
          </Link>
        ))}
      </SidebarNav>
      <div className="l-grid__item l-grid__item--9">
        <pre>subview: {subview}</pre>
        {subview === "properties" && <Properties />}
      </div>
    </section>
  );
}
