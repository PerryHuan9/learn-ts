// 在node的process对象上加了一个hello方法
process.hello = who => {
  console.log("Hello! ", who);
  return true;
};
process.hello("Perry Huang");

mGlobal = {
  env: {
    NodeEnv: "development"
  }
};

console.log(mGlobal.env);
