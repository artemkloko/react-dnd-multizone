import React, { PropsWithChildren } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import { Container } from "./Container";
import { DragLayer } from "./DragLayer";
import { PassThroughProps } from "../@types";

export const DndMultizone = function<ItemType, DragZone extends string>(
  props: PropsWithChildren<PassThroughProps<ItemType, DragZone>>
): ReturnType<React.FC<PassThroughProps<ItemType, DragZone>>> {
  return (
    <DndProvider backend={Backend}>
      <Container<ItemType, DragZone> {...props} />
      <DragLayer<ItemType, DragZone>
        renderItemPreview={props.renderItemPreview}
        applyDeltaToItem={props.applyDeltaToItem}
      />
    </DndProvider>
  );
};
