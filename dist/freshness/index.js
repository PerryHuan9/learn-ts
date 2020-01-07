/**
 * freshness 也被称为更为严格的对象字面量检查
 *
 */
console.log("************************** freshness *************************");
function printMsg(obj) {
    console.log(obj);
}
printMsg({ msg: "江山如此多娇，引无数英雄竞折腰" });
function printPeople(people) {
    console.log(people);
}
printPeople({ name: "Perry", age: 12, sex: "Man", address: "深圳" });
