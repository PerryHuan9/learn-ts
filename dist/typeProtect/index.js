"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 类型保护
 * typeof、instanceof、in的判断可以触发类型保护
 *
 */
console.log("********************* typeProtect ********************");
// 1、typeof 触发类型保护
function doByType(type) {
    if (typeof type === "number") {
        // 根据typeof ts能判断当前type是number类型
        return type.toFixed(2);
    }
    else {
        // 结合上下文，ts确定当前的type是string类型
        return type.split("");
    }
}
console.log(doByType("Perry Huang"));
console.log(doByType(12345));
// 2、instanceof触发类型保护
var A = /** @class */ (function () {
    function A() {
        this.a = "aaa";
        this.d = "ddd";
        this.commom = 888;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.b = "bbb";
        this.e = "eee";
        this.commom = 888;
    }
    return B;
}());
function testInstanceof(obj) {
    if (obj instanceof A) {
        console.log(obj.a); // 识别obj为类A的实例，可以访问a属性
    }
    else {
        console.log(obj.b); // 识别obj为类B的实例，可以访问b属性
    }
}
testInstanceof(new A());
testInstanceof(new B());
// 3、in 判断触发类型保护
function testIn(obj) {
    if ("a" in obj) {
        console.log(obj.d); // 识别obj为类A的实例，可以访问d属性
    }
    else {
        console.log(obj.e); // 识别obj为类B的实例，可以访问e属性
    }
}
testIn(new A());
testIn(new B());
function testLiteral(param) {
    if (param.type === 1) {
        console.log(param.foo); // 识别param为Foo类型，可以访问foo属性
    }
    else {
        console.log(param.bar); // 识别param为Bar类型，可以访问bar属性
    }
}
testLiteral({ type: 1, foo: "I am Foo type." });
testLiteral({ type: 2, bar: "I am Bar type." });
// 5、自定义类型保护
function isFoo(arg) {
    return arg.foo !== undefined;
}
function testCustom(param) {
    if (isFoo(param)) {
        console.log(param.foo); // 识别param为Foo类型，可以访问foo属性
    }
    else {
        console.log(param.bar); // 识别param为Bar类型，可以访问bar属性
    }
}
testCustom({ type: 1, foo: "I am Foo type." });
testCustom({ type: 2, bar: "I am Bar type." });
exports.default = null;
