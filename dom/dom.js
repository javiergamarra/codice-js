const container = document.getElementById('container');

for (let i = 0; i < 10; i++) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = Math.random() * i * 50;
  circle.style.top = 50 * i;
  container.appendChild(circle);
}
