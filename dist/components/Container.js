"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var Item_1 = require("./Item");
exports.Container = function (props) {
    var _a = react_dnd_1.useDrop({
        accept: props.dragZones,
        drop: function (dragObject, monitor) {
            var item = dragObject.item, dragZone = dragObject.type;
            var delta = monitor.getDifferenceFromInitialOffset();
            if (delta) {
                if (props.applyDeltaToItem) {
                    item = props.applyDeltaToItem(item, dragZone, delta);
                }
                props.onDragZoneDrop(item, dragZone, delta);
            }
        }
    }), drop = _a[1];
    return (react_1.default.createElement("div", { ref: drop, style: props.style }, props.items.map(function (item, i) { return (react_1.default.createElement(Item_1.Item, { key: i, item: item, getItemTransform: props.getItemTransform, renderItem: props.renderItem, renderDragZones: props.renderDragZones })); })));
};
//# sourceMappingURL=Container.js.map