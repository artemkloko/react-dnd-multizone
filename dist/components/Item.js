"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
exports.Item = function (props) {
    var _a = react_1.useState(false), isDragging = _a[0], setIsDragging = _a[1];
    var _b = props.getItemTransform(props.item), left = _b.left, top = _b.top, width = _b.width, height = _b.height;
    return (react_1.default.createElement("div", { style: {
            position: "absolute",
            display: "table",
            left: left,
            top: top,
            width: width,
            height: height,
            opacity: isDragging ? 0 : 1
        } },
        props.renderDragZones(props.item, setIsDragging),
        react_1.default.createElement("div", { style: {
                clear: "both",
                position: "absolute",
                zIndex: -1,
                top: 0
            } }, props.renderItem(props.item))));
};
//# sourceMappingURL=Item.js.map