"use strict";
/**
 * 学习枚举 enum
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yello"] = 1] = "Yello";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log("Color", Color); // { '0': 'Red', '1': 'Yello', '2': 'Blue', Red: 0, Yello: 1, Blue: 2 }
console.log(Color.Red, Color.Yello, Color.Blue); // 0, 1, 2
// 改变某一个枚举的值
var HighColor;
(function (HighColor) {
    HighColor[HighColor["Green"] = 0] = "Green";
    HighColor[HighColor["Black"] = 5] = "Black";
    HighColor[HighColor["Blue"] = 6] = "Blue";
})(HighColor || (HighColor = {}));
console.log("HighColor:", HighColor);
// {
//   '0': 'Green',
//   '5': 'Black',
//   '6': 'Blue',
//   Green: 0,
//   Black: 5,
//   Blue: 6
// }
// 字符串枚举
var Type;
(function (Type) {
    Type["ON_LINE"] = "ON_LINE";
    Type["DOWN"] = "DOWN";
    Type["OTHER"] = "OTHER";
})(Type || (Type = {}));
console.log("Type:", Type);
var man = "Man" /* Man */; // 编译之后值直接是 "Man"
// 带静态方法的枚举
var PersonType;
(function (PersonType) {
    PersonType[PersonType["young"] = 0] = "young";
    PersonType[PersonType["middle"] = 1] = "middle";
    PersonType[PersonType["old"] = 2] = "old";
})(PersonType || (PersonType = {}));
(function (PersonType) {
    function isOld(person) {
        return person === PersonType.old;
    }
    PersonType.isOld = isOld;
})(PersonType || (PersonType = {}));
var Marry = PersonType.old;
console.log(PersonType.isOld(Marry));
// 枚举定义拆分
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuseday"] = 1] = "Tuseday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
})(Weekday || (Weekday = {}));
// 值不能重复，第一个值必须重新赋值
(function (Weekday) {
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
exports.default = null;
