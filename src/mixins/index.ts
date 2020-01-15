/**
 *
 * js和ts都只支持单继承
 * 从可重用组件构建类的另一种方式是通过基类来构建它们， 这种方式称为混合。
 *
 */

// 构造器类型
type Constructor<T = {}> = new (...args: any[]) => T;

// 添加属性的混合例子
function TimesTamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}
