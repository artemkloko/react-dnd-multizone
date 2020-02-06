import React, { PropsWithChildren } from "react";
import { useDrop } from "react-dnd";

import { Item } from "./Item";
import { DragObject, PassThroughProps } from "../@types";

export const Container = function<ItemType, DragZone extends string>(
  props: PropsWithChildren<PassThroughProps<ItemType, DragZone>>
): ReturnType<React.FC<PassThroughProps<ItemType, DragZone>>> {
  const [, drop] = useDrop({
    accept: props.dragZones,
    drop: (dragObject: DragObject<ItemType, DragZone>, monitor) => {
      let { item, type: dragZone } = dragObject;
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        if (props.applyDeltaToItem) {
          item = props.applyDeltaToItem(item, dragZone, delta);
        }
        props.onDragZoneDrop(item, dragZone, delta);
      }
    }
  });

  return (
    <div ref={drop} style={props.style}>
      {props.items.map((item, i) => (
        <Item<ItemType, DragZone>
          key={i}
          item={item}
          getItemTransform={props.getItemTransform}
          renderItem={props.renderItem}
          renderDragZones={props.renderDragZones}
        />
      ))}
    </div>
  );
};
