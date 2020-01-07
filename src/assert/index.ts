/**
 * 断言
 * 之所以不叫类型转换是因为类型转换更多是运行时的，而ts断言则是编译是的判断
 * 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。
 * 这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any。
 *
 * 断言是有害的，它忽略了ts的提示，遵从了你的判断而不是编译器的
 */

type Axis = {
  x: number;
  y: number;
};

// let num = {};
// num.x = 123; // 报错 x不存在{}类型中
// num.y = 344;

let num = {} as Axis;
num.x = 1231;
num.y = 789;

// 双重断言，当两个类型没有子集关系时是不允许进行断言的，如果一定要断言，则必须使用双重断言

let str = "12312"; // str被推断为string类型
// str = 12312 报错，12312不是string类型
// str = 12312 as string;  报错，number类型不能断言为string类型
str = (12312 as any) as string;

// 如果在模块没有使用export语句，那么这个模块内定义的变量将会是全局变量
export default null;
