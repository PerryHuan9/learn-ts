/**
 * freshness 也被称为更为严格的对象字面量检查
 *
 */

console.log("************************** freshness *************************");

function printMsg(obj: { msg: string }) {
  console.log(obj);
}

printMsg({ msg: "江山如此多娇，引无数英雄竞折腰" });
// printMsg({msg: '1231', b: '12'}) 报错， b属性不存在与{ msg: string }类型中

// 允许额外的属性
interface People {
  name: string;
  age: number;
  sex: string;
  [key: string]: string | number; // 允许name、age和sex之外的值为string或number的类型
}

function printPeople(people: People) {
  console.log(people);
}

printPeople({ name: "Perry", age: 12, sex: "Man", address: "深圳" });
