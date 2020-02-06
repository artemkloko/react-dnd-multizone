"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
exports.DragLayer = function (props) {
    var _a = react_dnd_1.useDragLayer(function (monitor) { return ({
        dragObject: monitor.getItem(),
        dragZone: monitor.getItemType(),
        isDragging: monitor.isDragging(),
        differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset()
    }); }), dragObject = _a.dragObject, dragZone = _a.dragZone, isDragging = _a.isDragging, differenceFromInitialOffset = _a.differenceFromInitialOffset;
    if (!isDragging || !dragZone || !differenceFromInitialOffset) {
        return null;
    }
    var item = dragObject.item;
    if (props.applyDeltaToItem) {
        item = props.applyDeltaToItem(item, dragZone, differenceFromInitialOffset);
    }
    return (react_1.default.createElement("div", { style: {
            position: "absolute",
            pointerEvents: "none",
            zIndex: 100,
            left: 0,
            top: 0
        } }, props.renderItemPreview(item, dragZone, differenceFromInitialOffset)));
};
//# sourceMappingURL=DragLayer.js.map