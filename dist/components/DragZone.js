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
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
exports.DragZone = function (props) {
    var _a = react_dnd_1.useDrag({
        item: props.dragObject,
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging()
        }); }
    }), isDragging = _a[0].isDragging, drag = _a[1], preview = _a[2];
    react_1.useEffect(function () {
        preview(react_dnd_html5_backend_1.getEmptyImage(), { captureDraggingState: true });
    }, []);
    react_1.useEffect(function () {
        props.onDrag(isDragging);
    }, [isDragging]);
    return (react_1.default.createElement("div", { ref: drag, style: props.style, onClick: function (event) { return props.onClick(props.dragObject, event); } }, props.children));
};
//# sourceMappingURL=DragZone.js.map