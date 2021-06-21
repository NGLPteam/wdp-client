import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { SidebarNav } from "components/atomic";

export default function Manage() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <section className="l-grid">
      <SidebarNav className="l-grid__item l-grid__item--3">
        <SidebarNav.Link>Properties</SidebarNav.Link>
        <SidebarNav.Link>Order</SidebarNav.Link>
        <SidebarNav.Link>Links</SidebarNav.Link>
        <SidebarNav.Link>Access</SidebarNav.Link>
        <SidebarNav.Link>Pages</SidebarNav.Link>
        <SidebarNav.Link>Contributions</SidebarNav.Link>
        <SidebarNav.Link>Files</SidebarNav.Link>
      </SidebarNav>
      <div className="l-grid__item l-grid__item--9">
        Manage {entity}: {id}
      </div>
    </section>
  );
}
