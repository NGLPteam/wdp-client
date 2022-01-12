import React from "react";
import * as Styled from "./InstanceHero.styles";

export default function InstanceHero() {
  return (
    <Styled.Header as="header" className="a-bg-custom10">
      <div className="l-container-wide">
        <h2>WDP Installation Name</h2>
        <Styled.Text className="t-rte">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed orci
          congue, rhoncus augue vehicula, porttitor odio. Vivamus vel turpis
          laoreet, cursus tellus id, auctor odio. Vestibulum posuere lectus
          ante, sit amet mollis ex placerat non. Mauris vitae venenatis dolor.
          Nullam nulla erat, scelerisque sed aliquam vel, lacinia non velit.{" "}
        </Styled.Text>
      </div>
    </Styled.Header>
  );
}
