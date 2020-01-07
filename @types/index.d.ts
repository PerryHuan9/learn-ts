/**
 * 本节学习如何声明全局变量和在全局对象上增加函数或变量
 * 所有的全局变量的声明都在@types文件上
 *
 */

// @types文件夹下的文件会自动被加载为类型
declare namespace NodeJS {
  interface Process {
    hello: (who: string) => boolean;
  }
}

interface Global {
  env: { [key: string]: string };
}

// 声明一个全局变量
declare let mGlobal: Global;
