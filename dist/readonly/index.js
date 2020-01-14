"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * readonly用来让属性只可读
 *
 */
exports.default = null;
//  1、通过内联注解使用readonly
var hello = {
    name: "Perry haung",
    age: 20
};
// hello.name = "2312" //报错，只读属性不可重写
hello.age = 21; // 正常
function printPerson(person) {
    // person.name = 12 // 报错，不允许修改
    console.log(person);
}
printPerson({ name: "hello word", age: 12 });
// 3、class中使用readonly
var Cat = /** @class */ (function () {
    function Cat() {
        this.voice = "喵喵喵";
        // this.voice = "asda";不允许修改值
        this.age = 21; //可以进行第一次赋值
    }
    return Cat;
}());
var rtt = {
    name: "asdas",
    age: 888
};
var arr = [12, 34, 213];
var hw = {
    content: "JS",
    to: "Perry Huang"
};
// hw.content = 'asdad' //hw这个变量是不能修改属性的
function change(hw) {
    hw.content = "Python"; //函数即便传入了只读属性对象的参数，因为这里声明的不是只读的，所以还是可以修改的
}
change(hw);
console.log(hw);
