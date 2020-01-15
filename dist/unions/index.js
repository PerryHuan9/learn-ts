"use strict";
/**
 *
 * 联合类型，用以匹配多个类型中的一个
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function getPetAction(pet) {
    if (pet.voice === "喵喵喵") {
        return pet.catchMouse;
    }
    else if (pet.voice === "哼哼哼") {
        return pet.sleep;
    }
    else if (pet.voice === "汪汪汪") {
        return pet.catchThief;
    }
    else {
        var _never = pet;
        return _never;
    }
}
function getPetAction2(pet) {
    switch (pet.voice) {
        case "哼哼哼":
            return pet.sleep;
        case "喵喵喵":
            return pet.catchMouse;
        case "汪汪汪":
            return pet.catchThief;
        default:
            var _never = pet; // 用never表示永远不会执行
            return _never;
    }
}
