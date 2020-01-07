/**
 * 学习枚举 enum
 *
 */

enum Color {
  Red,
  Yello,
  Blue
}
console.log("Color", Color); // { '0': 'Red', '1': 'Yello', '2': 'Blue', Red: 0, Yello: 1, Blue: 2 }
console.log(Color.Red, Color.Yello, Color.Blue); // 0, 1, 2

// 改变某一个枚举的值

enum HighColor {
  Green,
  Black = 5,
  Blue
}

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
enum Type {
  ON_LINE = "ON_LINE",
  DOWN = "DOWN",
  OTHER = "OTHER"
}
console.log("Type:", Type);

// 常量枚举可以进行优化
const enum Sex {
  Man = "Man",
  Woman = "Woman"
}

let man = Sex.Man; // 编译之后值直接是 "Man"

// 带静态方法的枚举
enum PersonType {
  young,
  middle,
  old
}

namespace PersonType {
  export function isOld(person: PersonType) {
    return person === PersonType.old;
  }
}

const Marry: PersonType = PersonType.old;
console.log(PersonType.isOld(Marry));

// 枚举定义拆分

enum Weekday {
  Monday,
  Tuseday,
  Wednesday
}
// 值不能重复，第一个值必须重新赋值
enum Weekday {
  Thursday = 3,
  Friday,
  Saturday,
  Sunday
}

export default null;
