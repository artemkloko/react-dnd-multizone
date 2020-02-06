import React from "react";

import {
  PassThroughProps,
  DndMultizone,
  DragZone,
  DragZoneProps
} from "react-dnd-multizone";

import { useItems, dummyItems, Item } from "./useItems";
import { ItemComponent } from "./ItemComponent";

const snapToGrid = (x: number) => {
  return Math.round(x / 25) * 25;
};

type DragZone =
  | "topLeft"
  | "top"
  | "topRight"
  | "left"
  | "center"
  | "right"
  | "bottomLeft"
  | "bottom"
  | "bottomRight";

const dragZones: DragZone[] = [
  "topLeft",
  "top",
  "topRight",
  "left",
  "center",
  "right",
  "bottomLeft",
  "bottom",
  "bottomRight"
];

type ResizeBoxProps = {
  item: Item;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResizeBox: React.FC<ResizeBoxProps> = props => {
  const onClick: DragZoneProps<Item, DragZone>["onClick"] = (
    dragZone,
    event
  ) => {
    const target = event.target as HTMLDivElement;
    const firstParent = target.parentElement as HTMLDivElement;
    const secondParent = firstParent.parentElement as HTMLDivElement;
    const thirdParent = secondParent.parentElement as HTMLDivElement;
    const fourthParent = thirdParent.parentElement as HTMLDivElement;
    const bounds = fourthParent.getBoundingClientRect();
    const coords = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    };
    console.log(dragZone.item, dragZone.type, coords);
  };

  return (
    <div
      style={{
        width: props.item.transform.width,
        height: props.item.transform.height,
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          height: 10,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <DragZone<Item, DragZone>
          dragObject={{ type: "topLeft", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ width: 10, backgroundColor: "red" }}
        />
        <DragZone<Item, DragZone>
          dragObject={{ type: "top", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ flex: 1, overflow: "hidden", backgroundColor: "blue" }}
        />
        <DragZone<Item, DragZone>
          dragObject={{ type: "topRight", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ width: 10, backgroundColor: "red" }}
        />
        {/* <div style={{ width: 10, backgroundColor: "red" }} />
        <div style={{ flex: 1, overflow: "hidden", backgroundColor: "blue" }} />
        <div style={{ width: 10, backgroundColor: "red" }} /> */}
      </div>
      <div
        style={{
          overflow: "hidden",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          flex: 1
        }}
      >
        <DragZone<Item, DragZone>
          dragObject={{ type: "left", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ width: 10, backgroundColor: "yellow" }}
        />
        <DragZone<Item, DragZone>
          dragObject={{ type: "center", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ flex: 1, overflow: "hidden", backgroundColor: "pink" }}
        />
        <DragZone<Item, DragZone>
          dragObject={{ type: "right", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ width: 10, backgroundColor: "yellow" }}
        />
        {/* <div style={{ width: 10, backgroundColor: "yellow" }} />
        <div style={{ flex: 1, overflow: "hidden", backgroundColor: "pink" }} />
        <div style={{ width: 10, backgroundColor: "yellow" }} /> */}
      </div>
      <div
        style={{
          height: 10,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <DragZone<Item, DragZone>
          dragObject={{ type: "bottomLeft", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ width: 10, backgroundColor: "red" }}
        />
        <DragZone<Item, DragZone>
          dragObject={{ type: "bottom", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ flex: 1, overflow: "hidden", backgroundColor: "blue" }}
        />
        <DragZone<Item, DragZone>
          dragObject={{ type: "bottomRight", item: props.item }}
          onClick={onClick}
          onDrag={props.setIsDragging}
          style={{ width: 10, backgroundColor: "red" }}
        />
        {/* <div style={{ width: 10, backgroundColor: "red" }} />
        <div style={{ flex: 1, overflow: "hidden", backgroundColor: "blue" }} />
        <div style={{ width: 10, backgroundColor: "red" }} /> */}
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  const items = useItems(dummyItems);

  const renderItem = (item: Item) => {
    return <ItemComponent {...item} />;
  };

  const applyDeltaToItem: PassThroughProps<
    Item,
    DragZone
  >["applyDeltaToItem"] = (item, dragZone, delta) => {
    const transform = { ...item.transform };

    if (dragZone === "topLeft") {
      // top
      transform.top = item.transform.top + delta.y;
      transform.height = item.transform.height - delta.y;
      // left
      transform.left = item.transform.left + delta.x;
      transform.width = item.transform.width - delta.x;
    } else if (dragZone === "top") {
      // top
      transform.top = item.transform.top + delta.y;
      transform.height = item.transform.height - delta.y;
    } else if (dragZone === "topRight") {
      // top
      transform.top = item.transform.top + delta.y;
      transform.height = item.transform.height - delta.y;
      // right
      transform.width = item.transform.width + delta.x;
    } else if (dragZone === "left") {
      // left
      transform.left = item.transform.left + delta.x;
      transform.width = item.transform.width - delta.x;
    } else if (dragZone === "center") {
      // center
      transform.top = item.transform.top + delta.y;
      transform.left = item.transform.left + delta.x;
    } else if (dragZone === "right") {
      // right
      transform.width = item.transform.width + delta.x;
    } else if (dragZone === "bottomLeft") {
      // bottom
      transform.height = item.transform.height + delta.y;
      // left
      transform.left = item.transform.left + delta.x;
      transform.width = item.transform.width - delta.x;
    } else if (dragZone === "bottom") {
      // bottom
      transform.height = item.transform.height + delta.y;
    } else if (dragZone === "bottomRight") {
      // bottom
      transform.height = item.transform.height + delta.y;
      // right
      transform.width = item.transform.width + delta.x;
    }

    return { ...item, transform };
  };

  const renderItemPreview: PassThroughProps<
    Item,
    DragZone
  >["renderItemPreview"] = (item, dragZone, delta) => {
    const { top, left } = item.transform;
    return (
      <div style={{ position: "absolute", top, left }}>
        <ItemComponent {...item} />
      </div>
    );
  };

  const onDragZoneDrop: PassThroughProps<Item, DragZone>["onDragZoneDrop"] = (
    item,
    dragZone,
    delta
  ) => {
    items.update(item);
  };

  const renderDragZones: PassThroughProps<Item, DragZone>["renderDragZones"] = (
    item,
    setIsDragging
  ) => {
    return <ResizeBox item={item} setIsDragging={setIsDragging} />;
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <DndMultizone<Item, DragZone>
        items={items.state.ids.map(id => items.state.byId[id])}
        dragZones={dragZones}
        getItemTransform={item => item.transform}
        renderItem={renderItem}
        renderDragZones={renderDragZones}
        onDragZoneDrop={onDragZoneDrop}
        renderItemPreview={renderItemPreview}
        applyDeltaToItem={applyDeltaToItem}
        style={{
          width: "100%",
          height: 300,
          backgroundColor: "rgba(0, 255, 255, 0.3)"
        }}
      />
    </div>
  );
};
