import { XYCoord } from "react-dnd";

export type Transform = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type DragObject<ItemType, DragZone> = {
  type: DragZone;
  item: ItemType;
};

export type PassThroughProps<ItemType, DragZone extends string> = {
  items: ItemType[];
  dragZones: DragZone[];
  getItemTransform: (item: ItemType) => Transform;
  renderItem: (item: ItemType) => JSX.Element;
  renderDragZones: (
    item: ItemType,
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
  applyDeltaToItem?: (
    item: ItemType,
    dragZone: DragZone,
    delta: XYCoord
  ) => ItemType;
  renderItemPreview: (
    item: ItemType,
    dragZone: DragZone,
    delta: XYCoord
  ) => JSX.Element;
  onDragZoneDrop: (item: ItemType, dragZone: DragZone, delta: XYCoord) => void;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "style">;
