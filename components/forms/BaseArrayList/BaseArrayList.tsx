import React from "react";
import * as Styled from "./BaseArrayList.styles";
import BaseArrayListItem from "./BaseArrayListItem";

const BaseArrayList = ({ children }: Props) => {
  return <Styled.List>{children}</Styled.List>;
};

interface Props {
  children: React.ReactNode;
}

BaseArrayList.Item = BaseArrayListItem;

export default BaseArrayList;
