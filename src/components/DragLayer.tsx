import React, { PropsWithChildren } from "react";
import { XYCoord, useDragLayer } from "react-dnd";

import { PassThroughProps, DragObject } from "../@types";

export type CustomDragLayerProps<ItemType, DragZone extends string> = Pick<
  PassThroughProps<ItemType, DragZone>,
  "renderItemPreview" | "style" | "applyDeltaToItem"
>;

export const DragLayer = function<ItemType, DragZone extends string>(
  props: PropsWithChildren<CustomDragLayerProps<ItemType, DragZone>>
): ReturnType<React.FC<CustomDragLayerProps<ItemType, DragZone>>> {
  type CollectedProps = {
    dragObject: DragObject<ItemType, DragZone>;
    dragZone: DragZone;
    isDragging: boolean;
    differenceFromInitialOffset: XYCoord | null;
  };

  const {
    dragObject,
    dragZone,
    isDragging,
    differenceFromInitialOffset
  } = useDragLayer<CollectedProps>(monitor => ({
    dragObject: monitor.getItem(),
    dragZone: monitor.getItemType() as DragZone,
    isDragging: monitor.isDragging(),
    differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset()
  }));

  if (!isDragging || !dragZone || !differenceFromInitialOffset) {
    return null;
  }

  let { item } = dragObject;
  if (props.applyDeltaToItem) {
    item = props.applyDeltaToItem(item, dragZone, differenceFromInitialOffset);
  }

  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 100,
        left: 0,
        top: 0
      }}
    >
      {props.renderItemPreview(item, dragZone, differenceFromInitialOffset)}
    </div>
  );
};
