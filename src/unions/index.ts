/**
 *
 * 联合类型，用以匹配多个类型中的一个
 *
 */

export default null;

interface Cat {
  voice: "喵喵喵";
  name: string;
  catchMouse: string;
}

interface Dog {
  voice: "汪汪汪";
  name: string;
  catchThief: String;
}

interface Ping {
  voice: "哼哼哼";
  name: string;
  sleep: string;
}

type Pet = Cat | Dog | Ping; // 联合类型

function getPetAction(pet: Pet) {
  if (pet.voice === "喵喵喵") {
    return pet.catchMouse;
  } else if (pet.voice === "哼哼哼") {
    return pet.sleep;
  } else if (pet.voice === "汪汪汪") {
    return pet.catchThief;
  } else {
    const _never: never = pet;
    return _never;
  }
}

function getPetAction2(pet: Pet) {
  switch (pet.voice) {
    case "哼哼哼":
      return pet.sleep;
    case "喵喵喵":
      return pet.catchMouse;
    case "汪汪汪":
      return pet.catchThief;
    default:
      const _never: never = pet; // 用never表示永远不会执行
      return _never;
  }
}
