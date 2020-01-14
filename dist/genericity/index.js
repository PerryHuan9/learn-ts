"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 泛型——用于在成员之间提供有意义的约束
 *
 */
exports.default = null;
// 1、泛型在类中的运用
/**
 * 在这里使用原型约束了push、pop函数以及data数组，使它们的类型一致
 */
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var queue = new Queue();
queue.push(12); // 只能push  number类型
queue.push(18);
console.log((_a = queue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed(2)); // pop的返回值将会是number或undefined
// 2、在函数中使用
/**
 *
 * 泛型在这里约束了函数的参数和返回值，它们的类型必须是一致的
 */
function reverse(items) {
    return items.reduce(function (result, item) { return __spreadArrays([item], result); }, []);
}
var arr = [12, 45, 23, 12, 54];
console.log("reverse前:", arr);
var reversed = reverse(arr); //根据reverse参数可以判定reversed现在是 number[]类型
// reversed[12] = "ad"; // 报错
// reverse = ["12"]; // 报错
console.log("reverse后:", reversed);
// 3、多个泛型类型
function map(arr, fn) {
    return arr.map(fn);
}
var result = map([12, 3453], function (item) { return item.toFixed(4); });
// result[1] = 1212; // 报错
console.log("result:", result);
