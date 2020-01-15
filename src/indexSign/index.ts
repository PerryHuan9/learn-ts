import { type } from "os";

/**
 *
 * 索引签名
 * 当在js代码里，任何变量都可以作为索引，在其内部会隐式调用toString,
 * 在ts里则不允许这样，索引仅允许number和string，当对象变量作为索引时，必须显式调用toString
 *
 */

//  1、ts的索引签名
let foo: any = {};
const obj = {
  toString() {
    return "hello";
  }
};
// foo[obj] = "Word"; // 报错，必须是string和number才能作为索引
foo[obj.toString()] = "Word";

// 2、声明一个索引签名
interface IndexSign {
  [key: string]: string; // 允许增加任意键为string值为string的类型
}

const bar: IndexSign = {};
bar[obj.toString()] = "word";

// 3、同时使用string和number类型的索引签名

interface ArrStr {
  [key: string]: number | string; // string类型索引的类型必须要包括number类型索引的值
  [index: number]: string;
}

const as: ArrStr = {
  1: "1",
  a: 1
};

// 4、限制允许添加的属性
type LimitKey = "name" | "id" | "sex";
type LimitIndex = {
  [key in LimitKey]?: string;
};
const lk: LimitIndex = {};
lk.id = "201541314117";
lk.name = "PerryHuang";
lk.sex = "man";
