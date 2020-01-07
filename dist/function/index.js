"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(params) {
    return params;
}
console.log(foo("小丫小二郎，背着书包上学堂"));
// 可选参数
function toNumber(str, fix) {
    if (fix === void 0) { fix = 0; }
    return Number(str).toFixed(fix);
}
console.log(toNumber("1121"));
console.log(toNumber("123123.342343", 2));
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
console.log(padding(8));
console.log(padding(1, 2));
console.log(padding(1, 2, 3, 4));
var longHand = function (num) { return Number(num); };
var middleHand = function (a) { return Number(a); };
console.log("result:", middleHand(123.234));
console.log("result:", middleHand("123.234"));
console.log("longHand:", longHand("123.234").toFixed(12));
