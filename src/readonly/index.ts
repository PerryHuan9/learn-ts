import { type } from "os";

/**
 *
 * readonly用来让属性只可读
 *
 */
export default null;

//  1、通过内联注解使用readonly
const hello: { readonly name: string; age: number } = {
  name: "Perry haung",
  age: 20
};

// hello.name = "2312" //报错，只读属性不可重写
hello.age = 21; // 正常

// 2、在interface或type中使用
interface Person {
  readonly name: string;
  readonly age: number;
}

function printPerson(person: Person) {
  // person.name = 12 // 报错，不允许修改
  console.log(person);
}

printPerson({ name: "hello word", age: 12 });

type Animal = {
  voice: string;
  readonly type: string;
};

// 3、class中使用readonly
class Cat {
  readonly voice = "喵喵喵";
  readonly age: number;
  constructor() {
    // this.voice = "asda";不允许修改值
    this.age = 21; //可以进行第一次赋值
  }
}

// 4、Readonly用于将类型的所有属性转为
interface TestType {
  name: string;
  age: number;
}
type TestType2 = {
  sex: number;
  id: string;
};

type RoTestType = Readonly<TestType>;
type RoTestType2 = Readonly<TestType2>;

let rtt: RoTestType = {
  name: "asdas",
  age: 888
};

// rtt.name = "asd"; // 不允许修改属性

// 5、ReadonlyArray 只读数组
type roArr = ReadonlyArray<number>;
const arr: roArr = [12, 34, 213];
// arr[1] = 231; //不允许修改

// 6、与const的对比
// 1)const用于变量，限制变量不能赋值给其它的值
// 2）readonly 用于对象属性，限制属性不能修改
// readonly只能保证’我‘不修改属性，但当对象交给其它变量，而该变量没有做出限制的时候，它是可以修改的

interface HW {
  content: string;
  to: string;
}

const hw: Readonly<HW> = {
  content: "JS",
  to: "Perry Huang"
};

// hw.content = 'asdad' //hw这个变量是不能修改属性的

function change(hw: HW) {
  hw.content = "Python"; //函数即便传入了只读属性对象的参数，因为这里声明的不是只读的，所以还是可以修改的
}

change(hw);
console.log(hw);
