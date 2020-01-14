/**
 * 泛型——用于在成员之间提供有意义的约束
 *
 */
export default null;

// 1、泛型在类中的运用
/**
 * 在这里使用原型约束了push、pop函数以及data数组，使它们的类型一致
 */
class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

const queue = new Queue<number>();
queue.push(12); // 只能push  number类型
queue.push(18);
console.log(queue.pop()?.toFixed(2)); // pop的返回值将会是number或undefined

// 2、在函数中使用
/**
 *
 * 泛型在这里约束了函数的参数和返回值，它们的类型必须是一致的
 */
function reverse<T>(items: T[]): T[] {
  return items.reduce((result, item) => [item, ...result], []);
}
const arr = [12, 45, 23, 12, 54];
console.log("reverse前:", arr);
const reversed = reverse(arr); //根据reverse参数可以判定reversed现在是 number[]类型
// reversed[12] = "ad"; // 报错
// reverse = ["12"]; // 报错
console.log("reverse后:", reversed);

// 3、多个泛型类型
function map<T, U>(arr: T[], fn: (arr: T) => U): U[] {
  return arr.map(fn);
}
const result = map<number, string>([12, 3453], item => item.toFixed(4));
// result[1] = 1212; // 报错
console.log("result:", result);
