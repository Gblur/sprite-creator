/** @format */

import React from "react";

interface Props {
  id: string;
}

export const Grid = (props: Props) => {
  return <div>{props.id}Hello Grid</div>;
};
