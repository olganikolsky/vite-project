import './style.css';
import { sum } from './src/utils.js';

document.querySelector('#app').innerHTML = `
    <div class="card">
        <h1>Let's sum!</h1>
     <input id = "num1" type = "number" placeholder = "Число 1">
    <input id = "num2" type = "number" placeholder = "Число 2"><br><br>
      <button id="counter" type="button">Получить результат</button>
      <p id="result"></p>
    </div>`;

let button = document.getElementById('counter');

button.addEventListener('click', () => {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = sum(num1, num2);
  document.getElementById(
    'result'
  ).textContent = `Результат: ${result}`;
});
