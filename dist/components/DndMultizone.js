"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = __importDefault(require("react-dnd-html5-backend"));
var Container_1 = require("./Container");
var DragLayer_1 = require("./DragLayer");
exports.DndMultizone = function (props) {
    return (react_1.default.createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.default },
        react_1.default.createElement(Container_1.Container, __assign({}, props)),
        react_1.default.createElement(DragLayer_1.DragLayer, { renderItemPreview: props.renderItemPreview, applyDeltaToItem: props.applyDeltaToItem })));
};
//# sourceMappingURL=DndMultizone.js.map