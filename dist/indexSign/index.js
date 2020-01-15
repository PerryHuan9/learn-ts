"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 索引签名
 * 当在js代码里，任何变量都可以作为索引，在其内部会隐式调用toString,
 * 在ts里则不允许这样，索引仅允许number和string，当对象变量作为索引时，必须显式调用toString
 *
 */
//  1、ts的索引签名
var foo = {};
var obj = {
    toString: function () {
        return "hello";
    }
};
// foo[obj] = "Word"; // 报错，必须是string和number才能作为索引
foo[obj.toString()] = "Word";
var bar = {};
bar[obj.toString()] = "word";
var as = {
    1: "1",
    a: 1
};
var lk = {};
lk.id = "201541314117";
lk.name = "PerryHuang";
lk.sex = "man";
