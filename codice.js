class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const COMMIT_RADIUS = 10;
const half = COMMIT_RADIUS / 2;

const draw = SVG('dom_branch_explorer');

const start = new Point(0, 15);
const end = new Point(1000, 15);

const origins = [];
const ends = [];

const master = draw.line(0, 20, 1000, 20);
master.stroke({ color: '#f06', width: 2, linecap: 'round' });
draw.circle(COMMIT_RADIUS).fill('#f06').move(start.x, start.y);
draw.circle(COMMIT_RADIUS).fill('#f06').move(end.x, end.y);

const paintLine = function (source, finish) {
  const startLine = draw.line(source.x + half, source.y + half, finish.x + half, finish.y + half);
  startLine.stroke({ color: '#f06', width: 2, linecap: 'round' }).opacity(0.2);
};
// master.animate().move(10, 10);
const paintCommits = function (_, i) {
  const point1 = new Point(Math.random() * 500, 100 + 50 * i);
  draw.circle(COMMIT_RADIUS).fill('#f06').move(point1.x, point1.y);
  origins.push(point1);

  const point2 = new Point(point1.x + Math.random() * 500, 100 + 50 * i);
  draw.circle(COMMIT_RADIUS).fill('#f06').move(point2.x, point2.y);
  ends.push(point2);

  const line = draw.line(point1.x + COMMIT_RADIUS, point1.y + half, point2.x, point2.y + half);
  line.stroke({ color: '#f06', width: 2, linecap: 'round' });

  const source = [...origins].reverse().find(x => x.x < point1.x) || start;
  paintLine(source, point1);

  const finish = [...ends].reverse().find(x => x.x > point2.x) || end;
  paintLine(point2, finish);

  line.mouseover(function () {
    this.stroke({ color: '#ff0', width: 3 });
  });

  line.mouseout(function () {
    this.stroke({ color: '#f06', width: 2 });
  });
};

Array.from({ length: 6 }, paintCommits);
