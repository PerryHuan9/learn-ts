"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
  现在，在对象字面量方法中的 this 类型，将由以下决定：
    如果这个方法显示指定了 this 参数，那么 this 具有该参数的类型。
    否则，如果方法由带 this 参数的签名进行上下文键入，那么 this 具有该参数的类型。
    否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为 T。
    否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中不包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为该上下文类型。
    否则，如果 --noImplicitThis 选项已经启用，this 具有该对象字面量的类型。
    否则，this 的类型为 any。
 */
exports.default = null;
// 1、this作为参数传入，则this的类型为参数的类型
var obj = {
    x: 12,
    y: "232",
    print: function () {
        this; // this为{ caller: { name: string } }
    }
};
// 2、没有传this参数，但开启了noImplicitThis, 方法由带 this 参数的签名进行上下文键入
var obj2 = {
    x: 12,
    y: "232",
    print: function (x) {
        this.x += x; // this将会指向obj2
    }
};
obj2.f = function () {
    console.log(this.x); // this还是指向 obj2
};
function makeObject(desc) {
    var data = desc.data || {};
    var methods = desc.methods || {};
    return __assign(__assign({}, data), methods);
}
var o = makeObject({
    data: {
        x: 12,
        y: 20
    },
    methods: {
        prindPoint: function () {
            // 可以直接访问到data中的变量，而不会给出错误提示
            console.log(this.x, this.y);
        },
        getPoint: function () {
            this.prindPoint();
            return [this.x, this.y];
        }
    }
});
o.getPoint();
