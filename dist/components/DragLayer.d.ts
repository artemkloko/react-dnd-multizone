import React from "react";
import { PassThroughProps } from "../@types";
export declare type CustomDragLayerProps<ItemType, DragZone extends string> = Pick<PassThroughProps<ItemType, DragZone>, "renderItemPreview" | "style" | "applyDeltaToItem">;
export declare const DragLayer: <ItemType, DragZone extends string>(props: React.PropsWithChildren<Pick<PassThroughProps<ItemType, DragZone>, "style" | "applyDeltaToItem" | "renderItemPreview">>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
//# sourceMappingURL=DragLayer.d.ts.map