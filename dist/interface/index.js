"use strict";
/**
 * 学习interface, interface和type其实是一样的东西
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var point3D = {
    x: 12,
    y: 23,
    z: 88
};
// 接口可以被class实现
var ChartPoint = /** @class */ (function () {
    function ChartPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return ChartPoint;
}());
var CrazyClass = /** @class */ (function () {
    function CrazyClass() {
    }
    CrazyClass.prototype.other = function () {
        return false;
    };
    return CrazyClass;
}());
var crazy = new CrazyClass();
console.log("crazy", crazy);
exports.default = null;
