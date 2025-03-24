import './assets/css/styles.css';

const hello = 'Hello World!';
const appendedElement = document.createElement('h1');
appendedElement.textContent = hello;
document.body.appendChild(appendedElement);
