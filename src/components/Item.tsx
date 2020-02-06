import React, { PropsWithChildren, useState } from "react";

import { PassThroughProps } from "../@types";

export type DndMultiZoneItemProps<ItemType, DragZone extends string> = {
  item: ItemType;
} & Pick<
  PassThroughProps<ItemType, DragZone>,
  "getItemTransform" | "renderItem" | "renderDragZones"
>;

export const Item = function<ItemType, DragZone extends string>(
  props: PropsWithChildren<DndMultiZoneItemProps<ItemType, DragZone>>
): ReturnType<React.FC<DndMultiZoneItemProps<ItemType, DragZone>>> {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { left, top, width, height } = props.getItemTransform(props.item);

  return (
    <div
      style={{
        position: "absolute",
        display: "table",
        left,
        top,
        width,
        height,
        opacity: isDragging ? 0 : 1
      }}
    >
      {props.renderDragZones(props.item, setIsDragging)}
      <div
        style={{
          clear: "both",
          position: "absolute",
          zIndex: -1,
          top: 0
        }}
      >
        {props.renderItem(props.item)}
      </div>
    </div>
  );
};
