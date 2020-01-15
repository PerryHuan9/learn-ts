/**
 * 流动的类型
 * typescript支持使用根据一个类型或变量生成另外一个类型，
 * 生成的方法是使用typeof或keyof
 *
 */

// 1、复制类型
class Foo {}
const Bar = Foo; // Bar仅是复制了Foo的变量声明空间，无法作为一个namespace使用
// const test: Bar = {}; // 报错，Bar会是一个value，不能作为type
// 可以使用import解决上述问题。 当然，使用type为其声明一个别名也是可以做到 type Bar = Foo
namespace importing {
  export class Foo {}
}
import NewBar = importing.Foo; // NewBar也会是一种新类型
const nb: NewBar = {};

// 2、捕获变量的类型
let num = 123;
let num2: typeof num = 345; // typeof num会得到number类型
const obj = { a: 123, b: "string", c: { d: 12 }, e: [12, 45] }; // typeof 取到obj的类型
const obj2: typeof obj = { a: 456, b: "1231", c: { d: 789 }, e: [45, 67] };
// 当然也可以只取obj某一个属性的类型
const arr: typeof obj.e = [4, 5];

// 3、捕获键的名称
// keyof可以用来获取一个类型的所有键并生成一个字面量联合类型
interface Person {
  name: string;
  age: number;
  isLive: boolean;
}

type Field = keyof Person; // KEY 会是 'name' | 'age' | 'isLive'

function getPersonField(person: Person, fieldName: Field) {
  return person[fieldName];
}

// 也可以获取对象变量的所有键
type ObjKey = keyof typeof obj; // ObjKey 会是 'a' | 'b' | 'c' | 'd'
const ok: ObjKey = "a";
