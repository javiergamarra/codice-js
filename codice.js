class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const COMMIT_RADIUS = 10;

const draw = SVG('dom_branch_explorer');

let start = new Point(0, 15);
let end = new Point(1000, 15);

let origins = [];
let ends = [];

Array.from({length: 6}, paintCommits);

const master = draw.line(0, 20, 1000, 20);
master.stroke({color: '#f06', width: 2, linecap: 'round'});
draw.circle(COMMIT_RADIUS).fill('#f06').move(start.x, start.y);
draw.circle(COMMIT_RADIUS).fill('#f06').move(end.x, end.y);

// master.animate().move(10, 10);

function paintCommits(x, i) {

    let point1 = new Point(Math.random() * 500, 100 + 50 * i);
    draw.circle(COMMIT_RADIUS).fill('#f06').move(point1.x, point1.y);
    origins.push(point1);

    let point2 = new Point(point1.x + Math.random() * 500, 100 + 50 * i);
    draw.circle(COMMIT_RADIUS).fill('#f06').move(point2.x, point2.y);
    ends.push(point2);

    const line = draw.line(point1.x + COMMIT_RADIUS, point1.y + COMMIT_RADIUS / 2, point2.x, point2.y + COMMIT_RADIUS / 2);
    line.stroke({color: '#f06', width: 2, linecap: 'round'});

    let source = [...origins].reverse().find(x => x.x < point1.x) || start;
    const startLine = draw.line(source.x + COMMIT_RADIUS / 2, source.y + COMMIT_RADIUS / 2, point1.x + COMMIT_RADIUS / 2, point1.y + COMMIT_RADIUS / 2);
    startLine.stroke({color: '#f06', width: 2, linecap: 'round'}).opacity(0.2);

    let finish = [...ends].reverse().find(x => x.x > point2.x) || end;
    const endLine = draw.line(point2.x + COMMIT_RADIUS / 2, point2.y + COMMIT_RADIUS / 2, finish.x + COMMIT_RADIUS / 2, finish.y + COMMIT_RADIUS / 2);
    endLine.stroke({color: '#f06', width: 2, linecap: 'round'}).opacity(0.2);

    line.mouseover(function() {
        this.stroke({color: '#ff0', width: 3})
    });
    line.mouseout(function() {
        this.stroke({color: '#f06', width: 2})
    })
}

