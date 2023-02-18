const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const str = ingredients.map(element => {
  const el = document.createElement('li');
  el.classList.add('item');
  el.textContent = element;
  // console.log(el);
  return el.outerHTML; //export elem html code
}).join('');

document.querySelector('ul#ingredients').insertAdjacentHTML("afterbegin",str);