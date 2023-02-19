const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const str = images.map(item => {
  const im = document.createElement('img');
  const li = document.createElement('li');
  im.src=item.url;
  im.alt=item.alt;
 li.appendChild(im);
 im.style="width: 100%";
 li.style="margin: 15px"
return li.outerHTML;
}).join('');

const gallery = document.querySelector('ul.gallery');
gallery.insertAdjacentHTML("afterbegin", str)
gallery.style="display: grid; grid-template-columns: 400px 400px; list-style:none"
