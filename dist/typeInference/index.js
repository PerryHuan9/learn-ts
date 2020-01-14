"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * typescript 能根据一些简单的规则推断变量的类型
 *
 */
exports.default = null;
// 1、定义变量
var name = "string"; // 根据值推断name为string类型
// name = 1212 //报错， number不能赋值为string类型
// 2、函数返回类型
function returnNumber(a, b) {
    return a + b; // 可以推断到返回值是number类型
}
var num = returnNumber(12, 34); // num可以被推断到时number类型
// num = '1231' // 报错
console.log(num.toFixed()); // 调用number的toFixed方法没有问题
// 3、函数的参数类型和返回值可以根据赋值来推断
var doSomething = function (a, b) {
    // a = "1312"; // 可推断到a和b为number类型。string赋值给number会报错
    return a + b;
};
// 4、对象属性的推断
var person = {
    name: "PerryHuang",
    age: 24
};
// person.name = 12312 // 报错 number不能赋值为string类型
// 5、解构变量的类型推断
var age = person.age; // 可以推断出age为number类型
console.log(age.toFixed(2));
// 6、警告
// 1) 如果类型不能被赋值推断出来，类型也将不会流入函数参数中。
// 2) 尽管 TypeScript 一般情况下能推断函数的返回值，但是它可能并不是你想要的
