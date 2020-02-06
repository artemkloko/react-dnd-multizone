import React from "react";
import { PassThroughProps } from "../@types";
export declare type DndMultiZoneItemProps<ItemType, DragZone extends string> = {
    item: ItemType;
} & Pick<PassThroughProps<ItemType, DragZone>, "getItemTransform" | "renderItem" | "renderDragZones">;
export declare const Item: <ItemType, DragZone extends string>(props: React.PropsWithChildren<DndMultiZoneItemProps<ItemType, DragZone>>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
//# sourceMappingURL=Item.d.ts.map