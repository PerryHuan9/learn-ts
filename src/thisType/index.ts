/**
  现在，在对象字面量方法中的 this 类型，将由以下决定：
    如果这个方法显示指定了 this 参数，那么 this 具有该参数的类型。
    否则，如果方法由带 this 参数的签名进行上下文键入，那么 this 具有该参数的类型。
    否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为 T。
    否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中不包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为该上下文类型。
    否则，如果 --noImplicitThis 选项已经启用，this 具有该对象字面量的类型。
    否则，this 的类型为 any。
 */
export default null;

// 1、this作为参数传入，则this的类型为参数的类型
const obj = {
  x: 12,
  y: "232",
  print(this: { caller: { name: string } }) {
    this; // this为{ caller: { name: string } }
  }
};

// 2、没有传this参数，但开启了noImplicitThis, 方法由带 this 参数的签名进行上下文键入
const obj2: { x: number; y: string; print(x: number): void; f?(): void } = {
  x: 12,
  y: "232",
  print(x: number) {
    this.x += x; // this将会指向obj2
  }
};
obj2.f = function() {
  console.log(this.x); // this还是指向 obj2
};

// 3、ThisType用以指定某个方法的上下文类型
type ObjectDescriptor<D, M> = {
  data?: D;
  //  在methods对象里面的方法的上下文被指定为了 D & M
  methods?: M & ThisType<D & M>;
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  const data = desc.data || {};
  const methods = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

const o = makeObject({
  data: {
    x: 12,
    y: 20
  },
  methods: {
    prindPoint() {
      // 可以直接访问到data中的变量，而不会给出错误提示
      console.log(this.x, this.y);
    },
    getPoint() {
      this.prindPoint();
      return [this.x, this.y];
    }
  }
});

o.getPoint();
