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
exports.CustomBackgroundColor = exports.CustomColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = __importDefault(require("../../components/MyLabel"));
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.default,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.default, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'h1',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'h1',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'h1',
    color: 'tertiary'
};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    size: 'h1',
    fontColor: '#D58D8D'
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: '#ff0000',
    backgroundColor: 'aquamarine'
};
