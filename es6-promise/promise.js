let container = document.getElementById('container');

fetch('http://data.lalaapp.wedeploy.io/location')
  .then(res => res.json())
  .then(x => {
    for (let obj of x) {
      let li = document.createElement('li');
      li.innerHTML = `<img src="${obj.image}">`;
      container.appendChild(li);
    }
  })
  .catch(err => console.log(err));
