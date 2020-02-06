import React from "react";

import { Item } from "./useItems";

export const ItemComponent: React.FC<Item &
  Pick<React.HTMLAttributes<HTMLDivElement>, "style">> = props => {
  return (
    <div
      style={{
        display: "block",
        width: props.transform.width,
        height: props.transform.height,
        backgroundColor: props.color
      }}
    >
      An Item {props.color}
    </div>
  );
};
