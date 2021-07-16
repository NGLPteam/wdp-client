import React, { useMemo } from "react";
import Link from "next/link";
import get from "lodash/get";
import { useRouterContext } from "hooks/useRouterContext";
import { SidebarNav } from "components/atomic";
import {
  Properties,
  Order,
  Links,
  Access,
  Pages,
  Contributions,
  Files,
} from "../manage";

const ROUTES = {
  properties: {
    label: "Properties",
    component: Properties,
  },
  order: {
    label: "Order",
    component: Order,
  },
  links: {
    label: "Links",
    component: Links,
  },
  access: {
    label: "Access",
    component: Access,
  },
  pages: {
    label: "Pages",
    component: Pages,
  },
  contributions: {
    label: "Contributions",
    component: Contributions,
  },
  files: {
    label: "Files",
    component: Files,
  },
};

const DEFAULT_ROUTE = ROUTES.properties;

export default function Manage() {
  const {
    activeModel: entity,
    activeId: id,
    activeView: view,
    activeSubview: subview,
  } = useRouterContext();

  // Get the current subview component
  const activeView = useMemo(() => {
    return get(ROUTES, subview) || DEFAULT_ROUTE;
  }, [subview]);

  const SubviewComponent = get(activeView, "component", null);

  return (
    <section className="l-grid">
      <SidebarNav className="l-grid__item l-grid__item--3">
        {Object.entries(ROUTES).map(([key, value], i) => (
          <Link key={key} href={`/${entity}/${id}/${view}/${key}`} passHref>
            <SidebarNav.Link
              active={subview === key || (i === 0 && subview === "main")}
            >
              {value.label}
            </SidebarNav.Link>
          </Link>
        ))}
      </SidebarNav>
      <div className="l-grid__item l-grid__item--9">
        {SubviewComponent && <SubviewComponent />}
      </div>
    </section>
  );
}
