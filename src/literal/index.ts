import { type } from "os";
import { Direction } from "readline";

/**
 * ts中值也是一种类型——字面量类型
 *
 */

export default null;
console.log("********************* literal ******************");

// 1、字面量类型
let foo: "Hello"; // foo的值只能为Hello
foo = "Hello";

let num: 12;
num = 12;

// 2、联合字面量类型
type Strs = "a" | "b" | "c" | "d";
type Nums = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;

function printStr(str: Strs) {
  console.log(str);
}

printStr("a");

const test = {
  a: "a"
};
// printStr(test.a); // 会报错 test.a被识别为string类型，并不是字面量 'a'类型
const other = {
  a: "b" as "b"
};
printStr(other.a); // 可以在定义或使用的时候使用断言，还有可以使用类型注解

type Str = {
  str: "d";
};
const obj: Str = {
  str: "d"
};
printStr(obj.str); // 没问题了，可推断出obj.str的值永远为 'd'

// 3、对象和联合类型实现枚举类型的功能
// 枚举类型是一种奇怪的类型，既可以充当类型，又可以当成对象进而访问它的属性
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    res.a = "1212";
    return res;
  }, Object.create({}));
}
const OTHER = strEnum(["North", "South", "East", "West"]); //此处OTHER是对象
type OTHER = keyof typeof OTHER; // 此处OTHER为类型

// 现在OTHER具备了枚举类型的全部特性
let other2: OTHER;
other2 = OTHER.East;
