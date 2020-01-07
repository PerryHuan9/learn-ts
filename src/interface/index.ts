/**
 * 学习interface, interface和type其实是一样的东西
 *
 */

export interface Point {
  x: number;
  y: number;
}

interface Point_3D extends Point {
  z: number;
}

type Point3D = Point_3D;

let point3D: Point_3D = {
  x: 12,
  y: 23,
  z: 88
};

// 接口可以被class实现
class ChartPoint implements Point {
  x: number;
  y: number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

interface Crazy {
  other(): boolean;
}

class CrazyClass implements Crazy {
  other() {
    return false;
  }
}

const crazy = new CrazyClass();
console.log("crazy", crazy);

export default null;
