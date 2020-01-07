"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 可调用类型
 * 函数也是一种可调用类型
 *
 */
console.log("****************************** Callable *********************************");
var mToString = function (all) { return String(all); };
console.log(mToString(12312));
console.log(mToString({ a: 2342 }));
console.log(mToString([12, 23423]));
console.log(mToString(null));
console.log(mToString(undefined));
// 箭头函数类型: 可利用箭头函数定义函数类型
var arrowTest = function () { return 12313; };
// 使用
// declare const Foo: CallMeWithNewToGetString;
// const bar = new Foo(); // bar 被推断为 string 类型
exports.default = null;
