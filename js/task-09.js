function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const but = document.querySelector('button.change-color');
const ev = but.addEventListener('click', () => {
  const bodyColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = bodyColor;
  document.querySelector('span.color').textContent = bodyColor;
})