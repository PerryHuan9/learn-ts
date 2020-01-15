/**
 * 流动的类型
 * typescript支持使用根据一个类型或变量生成另外一个类型，
 * 生成的方法是使用typeof或keyof
 *
 */
// 1、复制类型
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var Bar = Foo; // Bar仅是复制了Foo的变量声明空间，无法作为一个namespace使用
// const test: Bar = {}; // 报错，Bar会是一个value，不能作为type
// 可以使用import解决上述问题。 当然，使用type为其声明一个别名也是可以做到 type Bar = Foo
var importing;
(function (importing) {
    var Foo = /** @class */ (function () {
        function Foo() {
        }
        return Foo;
    }());
    importing.Foo = Foo;
})(importing || (importing = {}));
var NewBar = importing.Foo; // NewBar也会是一种新类型
var nb = {};
// 2、捕获变量的类型
var num = 123;
var num2 = 345; // typeof num会得到number类型
var obj = { a: 123, b: "string", c: { d: 12 }, e: [12, 45] }; // typeof 取到obj的类型
var obj2 = { a: 456, b: "1231", c: { d: 789 }, e: [45, 67] };
// 当然也可以只取obj某一个属性的类型
var arr = [4, 5];
function getPersonField(person, fieldName) {
    return person[fieldName];
}
var ok = "a";
