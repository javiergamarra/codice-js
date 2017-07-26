class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(q) {
    return new Point(this.x + q, this.y + q);
  }
}

const radius = 10;
const half = radius / 2;
const width = 1000;
const color = '#f06';
const draw = SVG('dom_branch_explorer').size(width + 100, 500);

const paintLine = function (x1, x2) {
  const line = draw.line(x1.x, x1.y, x2.x, x2.y);
  return line.stroke({ color, width: 2, linecap: 'round' });
};

const paintCircle = function (x1) {
  return draw.circle(radius).fill(color).move(x1.x, x1.y);
};

const randomX = function () {
  const halfWidth = width / 2;
  return Math.random() * halfWidth;
};

const start = new Point(0, radius + half);
const end = new Point(width, radius + half);
const origins = [];
const ends = [];

const master = draw.line(0, radius * 2, width, radius * 2);
master.stroke({ color, width: 2, linecap: 'round' });
paintCircle(start);

const paintCommits = function (_, i) {
  const spacing = i * 50;
  const y = 100 + spacing;

  const point1 = new Point(randomX(), y);
  paintCircle(point1);
  origins.push(point1);

  const point2 = new Point(point1.x + randomX(), y);
  paintCircle(point2);
  ends.push(point2);

  const line = paintLine(point1.add(half), point2.add(half));
  line.mouseover(() => line.stroke({ width: 4 }));
  line.mouseout(() => line.stroke({ width: 2 }));

  const source = [...origins].reverse().find(x => x.x < point1.x) || start;
  paintLine(source.add(half), point1.add(half)).opacity(0.2);

  const finish = [...ends].reverse().find(x => x.x > point2.x) || end;
  paintLine(point2.add(half), finish.add(half)).opacity(0.2);
};

Array.from({ length: 6 }, paintCommits);
