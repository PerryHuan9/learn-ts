import { type } from "os";

/**
 * 函数
 *
 */

//  声明参数类型及返回值类型
function foo(params: string): string;
function foo(params) {
  return params;
}

console.log(foo("小丫小二郎，背着书包上学堂"));

// 可选参数
function toNumber(str: string, fix: number = 0): string {
  return Number(str).toFixed(fix);
}

console.log(toNumber("1121"));
console.log(toNumber("123123.342343", 2));

// 可重载
function padding(all: number);
function padding(topBottom: number, leftRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
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

// 函数声明: 在没有函数实现的情况下可定义函数声明

// 下面三种声明方式是一样的
// 1、定义可被调用的类型之一——函数
interface LongHand {
  (a: string): number;
}
type MiddleHand = {
  (a: number): number;
  (a: string): number;
};
type ShortHnad = (a: number) => number;

const longHand: LongHand = num => Number(num);
const middleHand: MiddleHand = a => Number(a);
console.log("result:", middleHand(123.234));
console.log("result:", middleHand("123.234"));
console.log("longHand:", longHand("123.234").toFixed(12));

export default null;
