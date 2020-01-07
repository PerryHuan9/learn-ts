/**
 * 类型保护
 * typeof、instanceof、in的判断可以触发类型保护
 *
 */
console.log("********************* typeProtect ********************");

// 1、typeof 触发类型保护
function doByType(type: number | string) {
  if (typeof type === "number") {
    // 根据typeof ts能判断当前type是number类型
    return type.toFixed(2);
  } else {
    // 结合上下文，ts确定当前的type是string类型
    return type.split("");
  }
}

console.log(doByType("Perry Huang"));
console.log(doByType(12345));

// 2、instanceof触发类型保护
class A {
  a = "aaa";
  d = "ddd";
  commom = 888;
}

class B {
  b = "bbb";
  e = "eee";
  commom = 888;
}

function testInstanceof(obj: A | B) {
  if (obj instanceof A) {
    console.log(obj.a); // 识别obj为类A的实例，可以访问a属性
  } else {
    console.log(obj.b); // 识别obj为类B的实例，可以访问b属性
  }
}

testInstanceof(new A());
testInstanceof(new B());

// 3、in 判断触发类型保护
function testIn(obj: A | B) {
  if ("a" in obj) {
    console.log(obj.d); // 识别obj为类A的实例，可以访问d属性
  } else {
    console.log(obj.e); // 识别obj为类B的实例，可以访问e属性
  }
}

testIn(new A());
testIn(new B());

// 4、字面量类型保护
type Foo = {
  type: 1;
  foo: string;
};

type Bar = {
  type: 2;
  bar: string;
};

function testLiteral(param: Foo | Bar) {
  if (param.type === 1) {
    console.log(param.foo); // 识别param为Foo类型，可以访问foo属性
  } else {
    console.log(param.bar); // 识别param为Bar类型，可以访问bar属性
  }
}

testLiteral({ type: 1, foo: "I am Foo type." });
testLiteral({ type: 2, bar: "I am Bar type." });

// 5、自定义类型保护
function isFoo(arg: Foo | Bar): arg is Foo {
  return (arg as Foo).foo !== undefined;
}

function testCustom(param: Foo | Bar) {
  if (isFoo(param)) {
    console.log(param.foo); // 识别param为Foo类型，可以访问foo属性
  } else {
    console.log(param.bar); // 识别param为Bar类型，可以访问bar属性
  }
}

testCustom({ type: 1, foo: "I am Foo type." });
testCustom({ type: 2, bar: "I am Bar type." });

export default null;
