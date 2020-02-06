import React from "react";
import { DragSourceMonitor } from "react-dnd";
import { DragObject } from "../@types";
export declare type DragZoneProps<ItemType, DragZone extends string> = {
    dragObject: DragObject<ItemType, DragZone>;
    onDrag: (isDragging: ReturnType<DragSourceMonitor["isDragging"]>) => void;
    onClick: (dragObject: DragObject<ItemType, DragZone>, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "style">;
export declare const DragZone: <ItemType, DragZone extends string>(props: React.PropsWithChildren<DragZoneProps<ItemType, DragZone>>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
//# sourceMappingURL=DragZone.d.ts.map