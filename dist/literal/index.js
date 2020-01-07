"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ts中值也是一种类型——字面量类型
 *
 */
exports.default = null;
console.log("********************* literal ******************");
// 1、字面量类型
var foo; // foo的值只能为Hello
foo = "Hello";
var num;
num = 12;
function printStr(str) {
    console.log(str);
}
printStr("a");
var test = {
    a: "a"
};
// printStr(test.a); // 会报错 test.a被识别为string类型，并不是字面量 'a'类型
var other = {
    a: "b"
};
printStr(other.a); // 可以在定义或使用的时候使用断言，还有可以使用类型注解
var obj = {
    str: "d"
};
printStr(obj.str); // 没问题了，可推断出obj.str的值永远为 'd'
// 3、对象和联合类型实现枚举类型的功能
// 枚举类型是一种奇怪的类型，既可以充当类型，又可以当成对象进而访问它的属性
function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        res.a = "1212";
        return res;
    }, Object.create({}));
}
var OTHER = strEnum(["North", "South", "East", "West"]); //此处OTHER是对象
// 现在OTHER具备了枚举类型的全部特性
var other2;
other2 = OTHER.East;
