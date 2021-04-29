const btn = document.querySelector('.submit');
const inputV = document.querySelector('.input');

const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

btn.addEventListener('click', () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputV.value + '&appid=[Your api key]')
    .then(response => response.json())
    .then(data => {
      const nameV = data['name'];
      const descV = data['weather'][0]['description'];
      const tempV = data['main']['temp'];

      name.innerHTML = nameV;
      temp.innerHTML = tempV;
      desc.innerHTML = descV;
    })
    .catch(err => alert('no match'))

})





/*const nameV = data['name'];
      const descV = data['weather'][0]['description'];
      const tempV = data['main']['temp'];*/