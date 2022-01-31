import React from "react";
import * as Styled from "./BaseArrayList.styles";
import BaseArrayListItem from "./BaseArrayListItem";

const BaseArrayList = ({ children, column }: Props) => {
  return <Styled.List $column={column}>{children}</Styled.List>;
};

interface Props {
  children: React.ReactNode;
  column?: true;
}

BaseArrayList.Item = BaseArrayListItem;

export default BaseArrayList;
