import React, { useEffect, PropsWithChildren } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { DragObject } from "../@types";

export type DragZoneProps<ItemType, DragZone extends string> = {
  dragObject: DragObject<ItemType, DragZone>;
  onDrag: (isDragging: ReturnType<DragSourceMonitor["isDragging"]>) => void;
  onClick: (
    dragObject: DragObject<ItemType, DragZone>,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "style">;

export const DragZone = function<ItemType, DragZone extends string>(
  props: PropsWithChildren<DragZoneProps<ItemType, DragZone>>
): ReturnType<React.FC<DragZoneProps<ItemType, DragZone>>> {
  const [{ isDragging }, drag, preview] = useDrag({
    item: props.dragObject,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  useEffect(() => {
    props.onDrag(isDragging);
  }, [isDragging]);

  return (
    <div
      ref={drag}
      style={props.style}
      onClick={event => props.onClick(props.dragObject, event)}
    >
      {props.children}
    </div>
  );
};
